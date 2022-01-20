import {Dock} from "./Dock.mjs";

/**
 * Import images icons
 */
export let imgIcon = [

    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/de3f9b914257f21898248fe9ca531686_low_res_France_24.png", link:"https://www.france24.com/fr/", title: "News"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/81cd474a88ff606ebfacf33a13e43de0_low_res_Amazon.png", link:"https://www.amazon.fr/?&tag=gabf-21&ref=pd_sl_7q4kyaidef_e&adgrpid=65747210384&hvpone=&hvptwo=&hvadid=441764237037&hvpos=&hvnetw=g&hvrand=1425256786356143066&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040073&hvtargid=kwd-10573980&hydadcr=16313_2026365&gclid=EAIaIQobChMIvOOJrZzA9QIVg-R3Ch2AIwZ6EAAYASAAEgKY4vD_BwE", title: "Amazon"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/e558a63aa55f573be894583e982638b3_low_res_Calculator.png", link:"index.html", title: "Calculator"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/9e67f579ac9f6a754c11147889ce8e9c_low_res_Google_Maps.png", link:"https://www.google.be/maps/@50.154465,4.624975,8z?hl=fr", title: "Google Maps"},

    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/fade279091bf98c42baddb9eadff0b82_low_res_Photos.png", link:"index.html", title: "Gallery"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/6c261032614d6bd3bc5c45fb7e2124af_Deezer.png", link:"https://www.deezer.com/fr/", title: "Dezeer"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/edf280f9b1f5d046fd3593f053f2b49d_low_res_App_Store__iOS_7_.png", link:"https://www.apple.com/befr/?afid=p238%7CsgBdmzvmD-dc_mtid_187079nc38483_pcrid_571007413608_pgrid_12762076735_&cid=aos-be-kwgo-brand--slid--bran-product-",title:"App Store"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/b7a0f0a361d0f1f725e47f8a603663d5_low_res_Firefox.png", link:"https://www.mozilla.org/fr/firefox/new/", title: "Firefox"},

    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/db56cc51960b3f5c1b01fe053b6e250f_low_res_waifu2x.png", link:"https://www.wakanim.tv/fr/v2", title: "Manga"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/90c6cf9c9fad9f93d289ba3ccc46f523_low_res_Blender_Alpha__Alt_.png", link:"https://www.commentcamarche.net/telecharger/photo-graphisme/4905-blender/", title: "Blender"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/c39db976546eb53261670b78003560db_low_res_Terminal.png", link:"index.html", title: "Terminal"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/be94ac53fed6faaa129fa37533796312_low_res_1618285070693.png", link:"https://discord.com/", title: "Discord"},

    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/b715967ea65485f7780c941ac70131b0_low_res_Canva.png", link:"https://www.canva.com/fr_fr/q/pro/?utm_source=google_sem&utm_medium=cpc&utm_campaign=be_fr_all_pro_rev_conversion_branded-tier1-core_em&utm_term=be_fr_all_pro_rev_conversion_Branded_Tier1_Canva_EM", title: "Canva"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/ffaaf6a3bd852967d8e7f6800a6af548_low_res_Github.png", link:"https://github.com", title: "GitHub"},
    { imgIcon :"https://media.macosicons.com/parse/files/macOSicons/d538599a2bc8f5355e140a613abdf151_low_res_IntelliJ_IDEA.png", link:"https://www.jetbrains.com/fr-fr/idea/", title: "Idea"},

];

/*
 * Create the icon
 */
let x = 0;
export let Icon = function () {

    this.create = function () {
        let icon = document.createElement("a");
        icon.id = "icon" + x;
        icon.className = "dock-icon";
        icon.href = imgIcon[x]['link'];
        icon.target = "_blank";
        document.getElementById("dock").append(icon);

        let image = document.createElement("img");
        image.src = imgIcon[x]['imgIcon'];
        image.alt = imgIcon[x]['title'];
        image.id = 'image' + x;
        icon.append(image);

        /*
         * Create text (title of the icon)
         */
        let tooltip = document.createElement("span");
        tooltip.className = "dock-title";
        tooltip.innerHTML = imgIcon[x]['title'];
        icon.append(tooltip);

        let a = 0;
        let dock = new Dock(x);

        if (a === 0) {
            dock.bottom();
        }

        //  animation of the icons
        let click = document.getElementById("icon" + x);
        click.addEventListener("click", function () {
            let y = this.id;
            let scroll = y.replace("icon", "");

        });
        x++;
    }

}