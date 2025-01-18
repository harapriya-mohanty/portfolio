var tablinkss = document.getElementsByClassName("tablinks");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) {
            for (tablink of tablinkss) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("activetab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("activetab");
        }

        const body= document.querySelector("body");
        toggleSwitch= document.getElementById("toggle-switch");
        toggleSwitch.addEventListener("click",()=> {
            body.classList.toggle("dark");
        })
        function gotolink(link){
            console.log(link.value);
            window.open(link.value);
        }