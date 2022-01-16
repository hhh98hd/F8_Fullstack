var curSearcMode = 'SHOP';

var shopSearchOpt = document.querySelector('.header__search-option-item:nth-child(1)');
var webSearchOpt = document.querySelector('.header__search-option-item:nth-child(2)');

shopSearchOpt.children[0].classList.add('fa-check');

function onSearchOptClicked(opt)
{
    if(opt == curSearcMode)
    {
        // do nothing
    }
    else
    {
        var shopCheckIcon = shopSearchOpt.children[0];
        var webCheckIcon = webSearchOpt.children[0];

        if(opt == 'SHOP')
        {
            webCheckIcon.classList.remove('fa-check');
            shopCheckIcon.classList.add('fa-check');
        }
        else if(opt == 'WEB')
        {
            shopCheckIcon.classList.remove('fa-check');
            webCheckIcon.classList.add('fa-check');
        }
        curSearcMode = opt;
    }
}

function onShophOptClicked() 
{
    onSearchOptClicked('SHOP');
}

function onWebOptClicked()
{
    onSearchOptClicked('WEB')
}

shopSearchOpt.addEventListener('click', onShophOptClicked);
webSearchOpt.addEventListener('click', onWebOptClicked);
