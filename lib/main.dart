import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'views/home_view.dart';
import 'controllers/theme_controller.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // تسجيل الـ Controllers
    Get.put(ThemeController());
    
    return GetMaterialApp(
      title: 'Window App Flutter',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: GoogleFonts.cairoTextTheme(),
        fontFamily: GoogleFonts.cairo().fontFamily,
      ),
      darkTheme: ThemeData.dark().copyWith(
        textTheme: GoogleFonts.cairoTextTheme(ThemeData.dark().textTheme),
        fontFamily: GoogleFonts.cairo().fontFamily,
      ),
      home: HomeView(),
      locale: const Locale('ar', 'SA'),
      fallbackLocale: const Locale('en', 'US'),
      translations: AppTranslations(),
    );
  }
}

class AppTranslations extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
    'ar_SA': {
      'welcome': 'مرحباً',
      'counter': 'العداد',
      'increment': 'زيادة',
      'decrement': 'تقليل',
      'reset': 'إعادة تعيين',
      'dark_mode': 'الوضع المظلم',
      'light_mode': 'الوضع المضيء',
      'settings': 'الإعدادات',
      'home': 'الرئيسية',
    },
    'en_US': {
      'welcome': 'Welcome',
      'counter': 'Counter',
      'increment': 'Increment',
      'decrement': 'Decrement',
      'reset': 'Reset',
      'dark_mode': 'Dark Mode',
      'light_mode': 'Light Mode',
      'settings': 'Settings',
      'home': 'Home',
    }
  };
}