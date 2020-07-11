import 'package:flutter/material.dart';
import 'package:web_app1/theme_data/theme_data.dart';
import 'package:web_app1/theme_data/theme_switcher_inherited.dart';

import 'pages/home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ThemeSwitcherWidget(
      initialDarkModeOn: false,
      child: MyAppWidget(),
    );
  }
}

class MyAppWidget extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Rock Paper Scissor',
      theme: ThemeSwitcher.of(context).isDarkModeOn
          ? darkTheme(context)
          : lightTheme(context),
      home: MyHomePage(title: 'Rock Paper Scissor'),
    );
  }
}
