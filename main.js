const press = document.querySelector("#press");
const container = document.querySelector(".container");

const getKeyCode = (e) => {
  container.innerHTML = `
    <div class="key"> 
<div class="name">event.key</div>
          <span>${e.key === " " ? "Space" : e.key}</span>
    </div>
    <div class="key"> 
    <div class="name">event.key</div>
           <span>${e.keyCode}</span>
    </div>
    <div class="key"> 
    <div class="name">event.code</div>
            <span>${e.code}</span>
    </div>
    
    `;
};

window.addEventListener("keydown", getKeyCode);
