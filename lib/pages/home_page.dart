import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:web_app1/commons/common_functions.dart';
import 'package:web_app1/theme_data/theme_switcher_inherited.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();

  var computerChoices = ["rock", "paper", "scissor"];
  final _random = Random();

  int userScore = 0;
  int computerScore = 0;
  int draws = 0;
  String computerMove = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          widget.title,
          style: TextStyle(fontWeight: FontWeight.w500),
        ),
      ),
      body: Container(
        padding: EdgeInsets.all(15),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Card(
                elevation: 2,
                shape: CircleBorder(),
                child: IconButton(
                  icon: ThemeSwitcher.of(context).isDarkModeOn
                      ? Icon(Ionicons.ios_sunny)
                      : Icon(Ionicons.ios_moon),
                  onPressed: () => ThemeSwitcher.of(context).switchDarkMode(),
                  tooltip: ThemeSwitcher.of(context).isDarkModeOn
                      ? "Light Mode"
                      : "Dark Mode",
                ),
              ),
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                    "Rock beats Scissor, Scissor beats Paper, Paper beats Rock."),
              ),
              Container(
                width: 600,
                child: getCounter(userScore, computerScore, draws),
              ),
              Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                elevation: 9,
                child: Container(
                  padding: EdgeInsets.all(10),
                  child: Text(
                    computerMove == ""
                        ? "Tap on the Icon to choose"
                        : "Computer drew $computerMove",
                    style: TextStyle(fontSize: 20),
                  ),
                ),
              ),
              Container(
                width: 800,
                child: Row(
                  children: <Widget>[
                    Expanded(
                      child: Card(
                        shape: CircleBorder(),
                        elevation: 9,
                        child: InkWell(
                          child: getImageIcons(
                            "assets/images/rock.png",
                            context,
                            _scaffoldKey,
                          ),
                          onTap: () {
                            computerMove = computerChoices[
                                _random.nextInt(computerChoices.length)];
                            int res = getWinner("rock", computerMove);
                            stateChange(res);
                            _scaffoldKey.currentState
                                .showSnackBar(getSnackBar(getResults(res)));
                          },
                        ),
                      ),
                    ),
                    Expanded(
                      child: Card(
                        shape: CircleBorder(),
                        elevation: 9,
                        child: InkWell(
                          child: getImageIcons(
                            "assets/images/paper.png",
                            context,
                            _scaffoldKey,
                          ),
                          onTap: () {
                            computerMove = computerChoices[
                                _random.nextInt(computerChoices.length)];
                            int res = getWinner("paper", computerMove);
                            stateChange(res);
                            _scaffoldKey.currentState
                                .showSnackBar(getSnackBar(getResults(res)));
                          },
                        ),
                      ),
                    ),
                    Expanded(
                      child: Card(
                        shape: CircleBorder(),
                        elevation: 9,
                        child: InkWell(
                          child: getImageIcons(
                            "assets/images/scissor.png",
                            context,
                            _scaffoldKey,
                          ),
                          onTap: () {
                            computerMove = computerChoices[
                                _random.nextInt(computerChoices.length)];
                            int res = getWinner("scissor", computerMove);
                            stateChange(res);
                            _scaffoldKey.currentState.showSnackBar(
                              getSnackBar(getResults(res)),
                            );
                          },
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  int getWinner(String userChoice, String computerChoice) {
    if ((userChoice == "rock" && computerChoice == "paper") ||
        (userChoice == "paper" && computerChoice == "scissor") ||
        (userChoice == "scissor" && computerChoice == "rock")) {
      return 0;
    } else if ((userChoice == "rock" && computerChoice == "scissor") ||
        (userChoice == "scissor" && computerChoice == "paper") ||
        (userChoice == "paper" && computerChoice == "rock")) {
      return 1;
    } else {
      return 2;
    }
  }

  Widget getResults(int int1) {
    if (int1 == 0) {
      return Text("Computer Wins. Better luck next time :) ");
    } else if (int1 == 1) {
      return Text("You Win !!! Congratulations :) ");
    } else {
      return Text("Its a draw !! Play again. :) ");
    }
  }

  void stateChange(int res) {
    setState(() {
      if (res == 0) {
        userScore = userScore;
        computerScore = computerScore + 1;
      } else if (res == 1) {
        userScore = userScore + 1;
        computerScore = computerScore;
      } else {
        userScore = userScore;
        computerScore = computerScore;
        draws = draws + 1;
      }
    });
  }

  Widget getSnackBar(Widget text) {
    return SnackBar(
      content: text,
      elevation: 16,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      behavior: SnackBarBehavior.floating,
      duration: Duration(milliseconds: 300),
      backgroundColor: ThemeSwitcher.of(context).isDarkModeOn
          ? Colors.white
          : Color(0xff393e46),
    );
  }
}
