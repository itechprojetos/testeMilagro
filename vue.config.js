module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: { publish: [{ provider: "github", owner: "Israel Moreira", private: false }] }
    }
  }
}
