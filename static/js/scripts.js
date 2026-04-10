

const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home','experience',  'publications', 'awards']


window.addEventListener('DOMContentLoaded', event => {

    if (window.location.protocol === 'file:') {
        const warn = document.getElementById('local-file-warning');
        if (warn) warn.classList.remove('d-none');
    }

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => {
            if (!response.ok) throw new Error('config fetch failed');
            return response.text();
        })
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => {
            console.log(error);
            const home = document.getElementById('home-md');
            if (home && !home.innerHTML.trim()) {
                home.innerHTML = '<p class="text-danger mb-0"><strong>无法加载配置：</strong>请用本地 HTTP 服务打开本站（见页面顶部黄条说明），不要双击用本地文件打开。</p>';
            }
        });


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => {
                if (!response.ok) throw new Error(name + ' fetch failed');
                return response.text();
            })
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            }).then(() => {
                if (typeof MathJax !== 'undefined' && MathJax.typeset) {
                    MathJax.typeset();
                }
            })
            .catch(error => console.log(error));
    })

});


