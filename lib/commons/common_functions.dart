import 'package:flutter/material.dart';
import 'package:web_app1/pages/home_page.dart';
import 'package:web_app1/theme_data/theme_switcher_inherited.dart';

Widget getImageIcons(String imgPath, BuildContext context,
    GlobalKey<ScaffoldState> _scaffoldKey) {
  return Container(
    padding: EdgeInsets.all(10),
    child: Image.asset(imgPath,
        color: ThemeSwitcher.of(context).isDarkModeOn
            ? Colors.white
            : Colors.black),
  );
}

Widget getCounter(int userScore, int sysScore, int draws) {
  return Row(
    children: [
      showScore(userScore, "You"),
      SizedBox(
        width: 20,
      ),
      showScore(draws, "Draws"),
      SizedBox(
        width: 20,
      ),
      showScore(sysScore, "Computer")
    ],
  );
}

Widget showScore(int int1, String name) {
  return Expanded(
    child: Card(
      elevation: 9,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Container(
            padding: EdgeInsets.all(5),
            alignment: Alignment.center,
            height: 40,
            child: Text(
              name,
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 25),overflow: TextOverflow.ellipsis,
            ),
          ),
          Container(
            height: 80,
            child: Text(
              "$int1",
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 60),
            ),
          ),
        ],
      ),
    ),
  );
}
