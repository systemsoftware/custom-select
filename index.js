document.addEventListener("DOMContentLoaded", () => {
for(const el of document.getElementsByTagName("select")){
if(el.hasAttribute("custom")){
const c = document.createElement("option");
c.value = el.getAttribute("custom-value") || "custom";
c.innerHTML = el.getAttribute("custom-label") || "Custom";
el.appendChild(c);
el.addEventListener("change", () => {
if(el.value != c.value) return;
const val = prompt(el.getAttribute("custom_text") || "Enter a value");
const select = el.hasAttribute("custom-optgroup") ? document.createElement("optgroup") : document.createElement("select");
if(el.hasAttribute("custom-optgroup")){
    select.label = el.getAttribute("custom-optgroup") || "Custom";
    el.appendChild(select);
}
if(val){
const opt = document.createElement("option");
opt.value = val;
opt.innerText = val;
select.appendChild(opt);
el.value = val;
}
});
}
}
})