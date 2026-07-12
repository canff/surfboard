function main(config) {
    if(!config.proxies){config.proxies=[];}
    if(!config.proxies.some(p=>p&&p.name==="占位节点")){config.proxies.push({name:"占位节点",type:"trojan",server:"0.0.0.0",port:1234,password:"1234567890",network:"ws",udp:true,sni:"0.0.0.0","skip-cert-verify":true});}
    config["proxy-groups"] = [
    {
      name: "手动选择1",
      icon: "https://testingcf.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/select.png",
      type: "select",
      proxies: [
        "香港节点",
        "日本节点",
        "自动选择",
        "占位节点"
      ],
      "include-all": true,
      filter: "^(?!.*套餐)(?!.*剩余)(?!.*到期)(?!.*流量)(?!.*占位).*$"
    },
        {
      name: "手动选择2",
      icon: "https://testingcf.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/select.png",
      type: "select",
      proxies: [
        "占位节点",
        "自动选择",
        "香港节点",
        "日本节点"
      ],
      "include-all": true,
      filter: "^(?!.*套餐)(?!.*剩余)(?!.*到期)(?!.*流量)(?!.*占位).*$"
    },
        {
      name: "手动选择3",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Stack.png",
      type: "select",
      proxies: [
        "占位节点",
        "自动选择",
        "台湾节点",
        "狮城节点"
      ],
      "include-all": true,
      filter: "^(?!.*套餐)(?!.*剩余)(?!.*到期)(?!.*流量)(?!.*占位).*$"
    },
        {
      name: "手动选择4",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Stack.png",
      type: "select",
      proxies: [
        "占位节点",
        "自动选择",
        "美国节点",
        "韩国节点"
      ],
      "include-all": true,
      filter: "^(?!.*套餐)(?!.*剩余)(?!.*到期)(?!.*流量)(?!.*占位).*$"
    },
    {
      name: "节点选择",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png",
      type: "select",
      proxies: [
        "手动聚合", "自动选择", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点"
      ]
    },
    {
      name: "手动聚合",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Nfcloud.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "policy-priority": "手动选择1:1.3;手动选择2:1.3;手动选择3:0.7;手动选择4:0.7",
      lazy: false,
      proxies: [
        "手动选择1",
        "手动选择2",
        "手动选择3",
        "手动选择4",
      ]
    },
    {
      name: "自动选择",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true
    },
    {
      name: "全球直连",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png",
      type: "select",
      proxies: [
        "DIRECT", "节点选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "自动选择"
      ]
    },
    {
      name: "电报消息",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png",
      type: "select",
      proxies: [
        "节点选择", "自动选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "全球直连"
      ]
    },
 
    {
      name: "油管视频",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png",
      type: "select",
      proxies: [
        "节点选择", "自动选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "全球直连"
      ]
    },
    {
      name: "哔哩哔哩",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png",
      type: "select",
      proxies: [
        "全球直连", "节点选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "自动选择"
      ]
    },
 
    {
      name: "谷歌服务",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
      type: "select",
      proxies: [
        "节点选择", "自动选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "全球直连"
      ]
    },
    {
      name: "苹果服务",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png",
      type: "select",
      proxies: [
        "节点选择", "自动选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "全球直连"
      ]
    },
 
    {
      name: "广告拦截",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/AdBlack.png",
      type: "select",
      proxies: [
        "REJECT", "节点选择", "手动选择1", "全球直连"
      ]
    },
    {
      name: "漏网之鱼",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png",
      type: "select",
      proxies: [
        "节点选择", "自动选择", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点", "手动选择1", "手动选择2", "手动选择3", "手动选择4", "手动聚合", "全球直连"
      ]
    },
    {
      name: "香港节点",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true,
      filter: "(?i)港|HK|hk|Hong Hong|HongHong|honghong"
    },
        {
      name: "台湾节点",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true,
      filter: "(?i)台|新北|彰化|TW|Taiwan"
    },
        {
      name: "狮城节点",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true,
      filter: "(?i)新加坡|坡|狮城|SG|Singapore"
    },
    {
      name: "日本节点",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true,
      filter: "(?i)日本|川日|东京|大阪|京都|泉日|埼玉|沪日|深日|樱|JP|Japan"
    },
    {
      name: "美国节点",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true,
      filter: "(?i)美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States"
    },
    {
      name: "韩国节点",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png",
      type: "smart",
      interval: 30,
      tolerance: 50,
      url: "https://www.gstatic.com/generate_204",
      "prefer-asn": true,
      "empty-fallback": "REJECT",
      lazy: true,
      "include-all": true,
      filter: "(?i)KR|Korea|KOR|首尔|韩|韓"
    },
    {
      name: "GLOBAL",
      icon: "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png",
      "include-all": true,
      type: "select",
      proxies: [
        "手动选择1", "手动选择2", "手动选择3", "手动选择4", "节点选择", "手动聚合", "自动选择", "全球直连", "电报消息", "油管视频", "哔哩哔哩", "谷歌服务", "苹果服务",  "广告拦截", "漏网之鱼", "香港节点", "台湾节点", "狮城节点", "日本节点", "美国节点", "韩国节点"
      ]
    }
  ];

  config["rule-providers"] = {
    LocalAreaNetwork: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/LocalAreaNetwork.list",
      path: "./ruleset/LocalAreaNetwork.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    UnBan: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/UnBan.list",
      path: "./ruleset/UnBan.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    Banad: {
      url: "https://raw.githubusercontent.com/canff/surfboard/refs/heads/main/Reject.list",
      path: "./ruleset/Reject.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },    
    Google: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Google.list",
      path: "./ruleset/Google.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    
    Apple: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Apple.list",
      path: "./ruleset/Apple.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    Telegram: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Telegram.list",
      path: "./ruleset/Telegram.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    YouTube: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/YouTube.list",
      path: "./ruleset/YouTube.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    BilibiliHMT: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/BilibiliHMT.list",
      path: "./ruleset/BilibiliHMT.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    Bilibili: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Bilibili.list",
      path: "./ruleset/Bilibili.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },   
    ProxyGFWlist: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ProxyGFWlist.list",
      path: "./ruleset/ProxyGFWlist.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http"
    },
    ChinaDomain: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaDomain.list",
      path: "./ruleset/ChinaDomain.list",
      behavior: "domain",
      interval: 86400,
      format: "text",
      type: "http"
    },   
      ChinaCompanyIp: {
      url: "https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaCompanyIp.list",
      path: "./ruleset/ChinaCompanyIp.list",
      behavior: "ipcidr",
      interval: 86400,
      format: "text",
      type: "http"
    }
  };

  config["rules"] = [
    "DOMAIN-SUFFIX,cloudflare.com,节点选择",
    "DOMAIN-SUFFIX,t.co,节点选择",
    "RULE-SET,LocalAreaNetwork,全球直连",
    "RULE-SET,UnBan,全球直连",
    "RULE-SET,Banad,广告拦截",
    "RULE-SET,Apple,苹果服务",
    "RULE-SET,Telegram,电报消息",
    "RULE-SET,YouTube,油管视频",
    "RULE-SET,BilibiliHMT,哔哩哔哩",
    "RULE-SET,Bilibili,哔哩哔哩",
    "RULE-SET,Google,谷歌服务",
    "RULE-SET,ProxyGFWlist,节点选择",
    "RULE-SET,ChinaDomain,全球直连",
    "RULE-SET,ChinaCompanyIp,全球直连",
    "GEOIP,CN,全球直连",
    "MATCH,漏网之鱼"
  ];

  return config;
}
