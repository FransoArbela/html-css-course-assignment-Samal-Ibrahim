        document.querySelector('.burger-button').addEventListener('click', function() {
            this.classList.toggle('active');
            var menuBackGr = document.createElement('div');
            menuBackGr.className = 'mobile-menu-backgr';
            body.appendChild(menuBackGr);
        });
