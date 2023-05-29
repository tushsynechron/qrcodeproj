export const stepIIData = {
    english:{
        header:"Microsoft Office",
        title:"Microsoft Office (Outlook, Word, Excel, OneNote, PowerPoint)",
        badgeValue:"Step 2",
        bullet_list:[
            "Launch Word, Excel, OneNote and PowerPoint to ensure they are functioning as expected",
            "Launch Outlook and check any shared mailboxes you previously had access to and try sending a test email",
          ],
          footer_text:
          "If you encounter any issues completing this step, please contact our Computer Refresh team for support: ",
        footer_link_text: "Computer.Refresh@innovapost.com",
        footer_link_path: "http://localhost:3000",
          btnInfo: [
            { to: "/step1", text: "Previous: Step 1" },
            { to: "/", text: "Homepage" },
            { to: "/step3", text: "Step 3" },
          ]
    },
    french:{
        header:"Vérification des applications Microsoft Office",
        title:"Microsoft Office (Outlook, Word, Excel, OneNote, PowerPoint)",
        badgeValue:"Étape 2",
        bullet_list:[
            "Lancez Word, Excel, OneNote et PowerPoint pour vous assurer qu’elle fonctionne comme prévu. ",
            "Lancez Outlook et vérifiez les boîtes aux lettres partagées auxquelles vous aviez accès et tentez d’envoyer un courriel d’essai. ",
          ],
          footer_text:
          "Si vous éprouvez des difficultés avec cette étape, écrivez à l’adresse",
        footer_link_text: "computer.refresh@innovapost.com ",
        footer_link_path: "http://localhost:3000",
        footer_link_text_e:"pour obtenir de l’aide.",
          btnInfo: [
            { to: "/step1", text: "Précédent : Étape 1" },
            { to: "/", text: "Page d'accueil" },
            { to: "/step3", text: "Étape 3" },
          ]
    }
}