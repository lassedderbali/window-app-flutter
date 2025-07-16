import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/navigation_controller.dart';
import '../controllers/theme_controller.dart';
import 'counter_view.dart';
import 'settings_view.dart';

class HomeView extends StatelessWidget {
  final NavigationController navController = Get.put(NavigationController());
  final ThemeController themeController = Get.find<ThemeController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('window_app_flutter'.tr),
        centerTitle: true,
        elevation: 0,
        actions: [
          Obx(() => IconButton(
            icon: Icon(
              themeController.isDarkMode.value 
                ? Icons.light_mode 
                : Icons.dark_mode
            ),
            onPressed: () => themeController.toggleTheme(),
            tooltip: themeController.isDarkMode.value 
              ? 'light_mode'.tr 
              : 'dark_mode'.tr,
          )),
        ],
      ),
      body: Obx(() {
        switch (navController.currentIndex.value) {
          case 0:
            return CounterView();
          case 1:
            return SettingsView();
          default:
            return CounterView();
        }
      }),
      bottomNavigationBar: Obx(() => BottomNavigationBar(
        currentIndex: navController.currentIndex.value,
        onTap: navController.changeIndex,
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'home'.tr,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'settings'.tr,
          ),
        ],
      )),
    );
  }
}