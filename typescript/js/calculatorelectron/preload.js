window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  document.getElementById("btn").addEventListener("click", (ev) => {
    let a = document.getElementById("fname").value;
    let b = document.getElementById("sname").value;
    let c = parseInt(a) + parseInt(b);
   

    document.getElementById("rname").value = String(c);
  });
});
