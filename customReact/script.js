function customRender(element, root) {
  // // Hard Coded
  // const domElement = document.createElement(element.type);
  // domElement.innerHTML = element.children;
  // domElement.setAttribute("href", element.props.href);
  // domElement.setAttribute("target", element.props.target);

  // root.appendChild(domElement);

  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  let props = element.props;
  for (const prop in props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, props[prop]);
  }

  root.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },

  children: "Click me to visit google",
};
const root = document.querySelector("#root");

customRender(reactElement, root);
