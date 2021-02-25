const colorsPossible = ["amber", "blue", "blueGrey", "brown",
     "cyan", "deepOrange", "deepPurple", "green", "grey",
      "indigo", "lightBlue", "lightGreen", "lime", "orange",
       "pink", "purple", "red", "teal", "yellow"];

const primaryColorLevelPossible = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

const secondaryColorLevelPossible = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

export const makeURL = () => {
    let avatar = Math.random().toString(36).substring(2) + '.svg';
    let color = colorsPossible[Math.floor(Math.random() * colorsPossible.length)];
    let primaryColorLevel = primaryColorLevelPossible[Math.floor(Math.random() * primaryColorLevelPossible.length)];
    let secondaryColorLevel = secondaryColorLevelPossible[Math.floor(Math.random() * secondaryColorLevelPossible.length)];
    let backgroung = '%23' + Math.floor(Math.random()*16777215).toString(16);
    let radius = "40";

    return 'https://avatars.dicebear.com/4.5/api/bottts/' + avatar +
        '?colors[]=' + color + 
        '&primaryColorLevel=' + primaryColorLevel +
        '&secondaryColorLevel=' + secondaryColorLevel +
        '&b=' + backgroung + '&r=' + radius;
}
