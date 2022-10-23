// load header and footer on multiple pages
window.onload = function ()
    {
        let header = document.getElementById('header');
        let footer = document.getElementById('footer');

        header.innerHTML += `
        <div id="header-imgs">
        <img id="hire-logo" src="./images/logo-int.png"/>
        <img id="hiretest-img" src="./images/HireTest.png"/>
        </div>
        <ul>
        <li><a href="./index.html">PAGE1</a></li>
        <li><a href="./page2.html">PAGE2</a></li>
        <li><a href="./page3.html">PAGE3</a></li>
        <div id="call-us">
        <a href="#">
        <p id="call-par">CALL US NOW</p>
        <p id="call-num"><img src="./images/ic-phone.png"/> +381 34 123 345</p>
        </a>
        </div>
        <div id="lg-bar">
        <a href="#" class="lg-links">Eng</a>
        &nbsp;
        <a href="#" class="lg-links">Srp</a>
        </div>
        </ul>
    `

        footer.innerHTML = `<img src="./images/int-logo-footer.png"/>
        <ul>
            <li>CONTACT</li>
            <li>FAQ</li>
            <li>SITEMAP</li>
        </ul>
        <p>2019 - ALL RIGHT RESERVED</p>`
    }