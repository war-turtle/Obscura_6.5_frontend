const config = {
  dev: {
    ClientId:
      "770672030537-fs29b8dfck7ctm2038e26caq7qcm760i.apps.googleusercontent.com",
    UsersBackend: "http://localhost:8080/users",
    LevelBackend: "http://localhost:8080/players"
  },
  prod: {
    ClientId:
      "770672030537-fs29b8dfck7ctm2038e26caq7qcm760i.apps.googleusercontent.com",
    UsersBackend: "https://obscuranitkkr.co.in:8080/users",
    LevelBackend: "https://obscuranitkkr.co.in:8080/players"
  }
};

export default process.env.REACT_APP_STAGE === "prod"
  ? config.prod
  : config.dev;
