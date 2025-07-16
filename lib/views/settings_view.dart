import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/theme_controller.dart';

class SettingsView extends StatelessWidget {
  final ThemeController themeController = Get.find<ThemeController>();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'settings'.tr,
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 30),
          Card(
            elevation: 4,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15),
            ),
            child: Column(
              children: [
                Obx(() => SwitchListTile(
                  title: Text('dark_mode'.tr),
                  subtitle: Text(
                    themeController.isDarkMode.value 
                      ? 'dark_mode'.tr 
                      : 'light_mode'.tr
                  ),
                  value: themeController.isDarkMode.value,
                  onChanged: themeController.setDarkMode,
                  secondary: Icon(
                    themeController.isDarkMode.value 
                      ? Icons.dark_mode 
                      : Icons.light_mode
                  ),
                )),
                const Divider(),
                ListTile(
                  title: Text('اللغة'),
                  subtitle: Text('العربية'),
                  leading: const Icon(Icons.language),
                  trailing: const Icon(Icons.arrow_forward_ios),
                  onTap: () {
                    // يمكن إضافة منطق تغيير اللغة هنا
                    Get.snackbar(
                      'إشعار',
                      'سيتم إضافة تغيير اللغة قريباً',
                      snackPosition: SnackPosition.BOTTOM,
                    );
                  },
                ),
                const Divider(),
                ListTile(
                  title: Text('حول التطبيق'),
                  subtitle: Text('الإصدار 1.0.0'),
                  leading: const Icon(Icons.info),
                  trailing: const Icon(Icons.arrow_forward_ios),
                  onTap: () {
                    Get.dialog(
                      AlertDialog(
                        title: Text('حول التطبيق'),
                        content: Text('تطبيق Flutter مع GetX\nالإصدار 1.0.0'),
                        actions: [
                          TextButton(
                            onPressed: () => Get.back(),
                            child: Text('موافق'),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}