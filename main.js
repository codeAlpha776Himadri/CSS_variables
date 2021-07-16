const inputs = document.querySelectorAll('.controls input');

const size_value = document.querySelector('#size-value');
const blur_value = document.querySelector('#blur-value');
const visibility_value = document.querySelector('#visibility-value');
const bgcolor_value = document.querySelector('#bgcolor-value');

function handleUpdate() {

    setTimeout(

        inputs.forEach((key) => {

            function declare_key() {
                let working_key = key.id;

                if (working_key == 'blur') {
                    blur_value.textContent = _value

                    visibility_value.textContent = ' ' ; 
                    size_value.textContent =  ' ' ; 
                    bgcolor_value.textContent = ' ' ; 
                }
                else if (working_key == 'visibility') {
                    visibility_value.textContent = _value

                    blur_value.textContent =      '' ;
                    size_value.textContent = '' ;
                    bgcolor_value.textContent = '' ;
                }
                else if (working_key == 'padding') {
                    size_value.textContent = _value

                    bgcolor_value.textContent =      '' ;
                    visibility_value.textContent = '' ;
                    blur_value.textContent = '' ;
                }
                else (working_key == 'color')
                {
                    bgcolor_value.textContent = _value

                    visibility_value.textContent ='' ;
                    size_value.textContent = '' ;
                    blur_value.textContent =       '' ;
                }

            }

            key.addEventListener('change', declare_key)
            key.addEventListener('mouseover', declare_key)

        }), 500);


    inp_suffix = this.dataset.sizing || '';
    let _value = this.value;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + inp_suffix);

    // let val_display = document.querySelectorAll('.display-val')
    // val_display.forEach((value) => {


    // })
};

inputs.forEach( input => {

    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);

});

