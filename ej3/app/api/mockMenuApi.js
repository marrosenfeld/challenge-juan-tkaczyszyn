import Data from '../data';

class mockMenuApi {
  static getMenu(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("load menu")
        let menus = [];
        let adminMenus = [];
        let allMenus = Data.menus;
        let allAdminMenus = Data.adminMenus;
        let openViews = [];
        let selectedMenuItem = null;
        let selectedOpenedMenuItem = null;
        let index = 0;
        for (let m in allMenus){
          let skipMenu = false
          allMenus[m].index = index
          menus.push(allMenus[m])
          skipMenu = true
          index++;
        }


        // Menu children authorities. REVIEW code!
        for (let m in menus){
          if (menus[m].children && menus[m].children.length){
            let children = []
            for (let c in menus[m].children){
              let authorities = menus[m].children[c].authorities;
              let skipMenu = false
              for(let t in authorities){
                for(let a in user.authorities){
                  if(user.authorities[a] === authorities[t]){
                    children.push(menus[m].children[c])
                    skipMenu = true
                    break
                  }
                }
              }
              if (skipMenu)
                break
            }
            menus[m].children = children
          }
        }
        console.log("menus", menus)

        if (Object.prototype.toString.call(menus) === '[object Array]'
        && menus.length > 0) {
          selectedMenuItem = menus[0];
          openViews = menus.slice(0, 1);
          selectedOpenedMenuItem = openViews[0];
        } else {
          menus = [];
        }

        resolve({
          menus,
          openViews,
          selectedMenuItem,
          selectedOpenedMenuItem,
        });
      }, 500);
    });
  }
}

export default mockMenuApi;
