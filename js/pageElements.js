/*
    This is how you add UI elements to this program.
    Every UI element extends Element, which only requires two things: the name of the element and a parent (an id of a div)
    Other than that, the additional params of elements vary based on the element itself
*/

export class Element {
    constructor(name, domParent) {
        this.name = name;
        this.domParent = domParent;
        this.div = document.createElement('div');
        this.div.id = name.replaceAll(" ","-") + "-div";
        this.div.classList.add("elementDiv");
        this.id = name.replaceAll(" ","-");
        if(domParent == "body") {
            this.domElement = document.body;
        } else {
            this.domParent = document.getElementById(domParent);
        }
        this.elements = [];
        this.endBreak = document.createElement("BR");
        this.domParent.appendChild(this.div);

        this.labelBreak = document.createElement("BR")
        this.label = document.createElement("label");
        this.label.id = name.replaceAll(" ","-");
        this.label.innerHTML = name;
    }

    createLineBreak() {
        return document.createElement("BR");
    }

    addElements() {
        this.elements.forEach(element => {
            this.div.appendChild(element);
        })
    }

    removeDiv() {
        this.div.remove();
    }

    addDiv() {
        this.domParent.appendChild(this.div);
    }

    hideLabel() {
        this.label.remove();
        this.labelBreak.remove();
    }

    showLabel() {
        this.div.prepend(this.labelBreak);
        this.div.prepend(this.label);
    }

    removeElement(index) {
        this.elements[index].remove();
        this.elements.splice(index, 1);
    }

    addElement(element) {
        this.elements.push(element);
        this.domParent.appendChild(element);
    }

    addClass(className) {
        this.div.classList.add(className);
    }
    
    setToolTip(text, section) {
        if(!this.div.classList.contains("tooltip")) {
            this.div.classList.add("tooltip")
        }
        let span = document.createElement("span");
        span.classList.add("tooltiptext");
        span.classList.add(section);
        span.innerHTML = text;
        this.elements.push(span);
        this.div.appendChild(span);
    }
}

export class Container {
    constructor(id, domParent, vertical = false) {
        this.div = document.createElement('div');
        this.div.id = id;
        if(vertical) {
            this.div.classList.add("verticalContainer");
        } else {
            this.div.classList.add("horizontalContainer");
        }
        if(domParent == "body") {
            this.domElement = document.body;
        } else {
            this.domParent = document.getElementById(domParent);
        }
        this.domParent.appendChild(this.div);
    }

    addBlock() {
        let args = Array.prototype.slice.call(arguments);
        for(let i = 0; i < args.length; i++) {
            let element = args[i];
            element.div.remove();
            this.div.appendChild(element.div);
        }
    }

    removeDiv() {
        this.div.remove();
    }

    addDiv() {
        this.domParent.appendChild(this.div);
    }

    addClass(className) {
        this.div.classList.add(className);
    }
}

export class TextBox extends Element {
    constructor(name, domParent, text) {
        super(name, domParent);
        this.div.classList.add("textBoxDiv");

        this.label.innerHTML = text;
        this.elements.push(this.label);
        this.elements.push(this.labelBreak);

        this.addElements();
    }
}

export class Slider extends Element {
    constructor(name, domParent, min, max, step, value) {
        super(name, domParent);
        this.div.classList.add("sliderDiv");

        this.slider = document.createElement("input");
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("min", min);
        this.slider.setAttribute("max", max);
        this.slider.setAttribute("step", step);
        this.slider.setAttribute("value", value);
        this.slider.id = name.replaceAll(" ","-") + "-slider";

        // this.elements.push(this.label);
        // this.elements.push(this.labelBreak);
        this.elements.push(this.slider);

        this.addElements();
    }
}

export class Checkbox extends Element {
    constructor(name, domParent, value = false) {
        super(name, domParent);
        this.div.classList.add("checkboxDiv");

        this.checkbox = document.createElement("input");
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.checked = value;
        this.checkbox.id = name.replaceAll(" ","-") + "-check";

        this.leftCheckDiv = document.createElement("div");
        this.leftCheckDiv.appendChild(this.label);

        this.rightCheckDiv = document.createElement("div");
        this.rightCheckDiv.appendChild(this.checkbox);

        this.div.classList.add("checkDiv");

        this.elements.push(this.leftCheckDiv);
        this.elements.push(this.rightCheckDiv);
        // this.elements.push(this.endBreak);

        this.addElements();
    }
}

export class Select extends Element {
    constructor(name, domParent, options = []) {
        super(name, domParent);
        this.div.classList.add("selectDiv");

        this.select = document.createElement("select");
        this.select.id = name.replaceAll(" ","-") + "-select"

        this.options = options;
        this.selectOptions = [];
        for (let i = 0; i < options.length; i++) {
            let option = document.createElement("option");
            option.text = this.options[i][0];
            option.value = this.options[i][1];
            this.selectOptions.push(option);
            this.select.appendChild(option);
        }

        this.elements.push(this.label);
        this.elements.push(this.labelBreak);
        this.elements.push(this.select);
        // this.elements.push(this.endBreak);

        this.addElements();
    }

    addOption(option) {
        this.options.push(option);
        let newOption = document.createElement("option");
        newOption.text = option[0];
        newOption.value = option[1];
        this.selectOptions.push(newOption);
        this.select.appendChild(newOption);
    }

    removeOption(option) {
        let optionIndex = this.selectOptions.findIndex(opt => opt[0] == option[0]);
        selectOptions[optionIndex].remove();
        this.selectOptions.splice(optionIndex, 1);
        this.options.splice(optionIndex, 1);
    }

    getSelectedName() {
        if(this.options.length > 0)
            return this.options[this.select.selectedIndex][0];
        else
            return null
    }

    getSelected() {
        if(this.options.length > 0)
            return this.options[this.select.selectedIndex][1];
        else
            return null
    }

    getSelectedIndex() {
        return this.select.selectedIndex;
    }

    getIndexOf(optionName) {
        return this.options.findIndex(option => option[0] == optionName);
    }

    getOptions() {
        return this.options;
    }

    setSelected(optionName) {
        this.select.selectedIndex = this.options.findIndex(option => option[0] == optionName)
    }
}

export class TextInput extends Element {
    constructor(name, domParent, defaultText = "") {
        super(name, domParent);
        this.div.classList.add("textInputDiv");

        this.textInput = document.createElement("input");
        this.textInput.setAttribute("type", "text");
        this.textInput.id = name.replaceAll(" ","-") + "-text";
        this.textInput.value = defaultText;

        this.elements.push(this.label);
        this.elements.push(this.labelBreak);
        this.elements.push(this.textInput);
        // this.elements.push(this.endBreak);

        this.addElements();
    }
}

export class Button extends Element {
    constructor(name, domParent, func) {
        super(name, domParent);
        this.div.classList.add("buttonDiv");

        this.button = document.createElement("button");
        this.button.innerHTML = name;
        this.button.id = name.replaceAll(" ","-") + "-button";
        this.button.addEventListener("click", func);

        this.elements.push(this.button);
        
        this.addElements();
    }
}