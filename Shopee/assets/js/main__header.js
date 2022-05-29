var curSearcMode = 'SHOP';
var inCartCount = 0;

const shopSearchOptItem = document.querySelector('.header__search-option-item:nth-child(1)');
const webSearchOptItem = document.querySelector('.header__search-option-item:nth-child(2)');
const curSearchSpan = document.querySelector('.header__search-option');

shopSearchOptItem.children[0].classList.add('fa-check');
shopSearchOptItem.addEventListener('click', onShophOptClicked);
webSearchOptItem.addEventListener('click', onWebOptClicked);

function onSearchOptClicked(opt)
{
    if(opt == curSearcMode)
    {
        // do nothing
    }
    else
    {
        var shopCheckIcon = shopSearchOptItem.children[0];
        var webCheckIcon = webSearchOptItem.children[0];

        if(opt == 'SHOP')
        {
            webCheckIcon.classList.remove('fa-check');
            shopCheckIcon.classList.add('fa-check');
            curSearchSpan.innerHTML = 'Trong Shop này';
        }
        else if(opt == 'WEB')
        {
            shopCheckIcon.classList.remove('fa-check');
            webCheckIcon.classList.add('fa-check');
            curSearchSpan.innerHTML = 'Trong Shopee';
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
