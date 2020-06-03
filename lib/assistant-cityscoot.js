const Cityscoot = require("./cityscoot");

class AssistantCityscoot {
  constructor({ email, password, latitude, longitude, radius }) {
    this.email = email;
    this.password = password;
    this.position = {
      latitude,
      longitude
    };
    this.radius = radius;
  }

  init(plugins) {
    this.plugins = plugins;
    if (!this.email || !this.password || !this.position.latitude || !this.position.longitude) {
      return Promise.reject(
        "[assistant-cityscoot] Erreur : vous devez configurer ce plugin !"
      );
    }
    return Promise.resolve(this);
  }

  async createRadar(triggerIn) {
    try {
      const city = new Cityscoot({
        email: this.email,
        password: this.password,
        licenseFilePath: "./license_files/file.lic",
      });
      await city.login();
      return await city.createRadar(this.position, this.radius, 5, triggerIn)
    } catch (err) {
      console.log(err);
    }
  }

  async action(triggerIn) {
    return await this.createRadar(triggerIn);
  }
}

exports.init = (configuration, plugins) => {
  return new AssistantCityscoot(configuration)
    .init(plugins)
    .then((resource) => {
      console.log("[assistant-cityscoot] Plugin chargé et prêt.");
      return resource;
    });
};
