export default function (plop) {
  // Generador de componentes
  plop.setGenerator('component', {
    description: 'Genera un componente React con archivo .jsx y .css',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '¿Cómo se llamará el componente?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.jsx',
        templateFile: 'plop-templates/Component.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.css',
        templateFile: 'plop-templates/Component.css.hbs',
      },
    ],
  });
};