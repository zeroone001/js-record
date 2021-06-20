1. ios,safari10以下 报错attempted to assign to readonly property

原因： ele.style = 'width: 100%;height: 100%' 这种是不支持的，需要换成ele.setAttribute('style', 'width: 100%;height: 100%');