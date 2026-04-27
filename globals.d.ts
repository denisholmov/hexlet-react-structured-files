declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }

// этот код нужен для typescript, чтобы он понимал импорты CSS-модулей