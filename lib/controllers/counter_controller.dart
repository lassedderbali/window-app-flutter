import 'package:get/get.dart';

class CounterController extends GetxController {
  var count = 0.obs;
  
  void increment() {
    count.value++;
  }
  
  void decrement() {
    count.value--;
  }
  
  void reset() {
    count.value = 0;
  }
  
  @override
  void onInit() {
    super.onInit();
    // يمكن إضافة أي منطق تهيئة هنا
  }
  
  @override
  void onClose() {
    // تنظيف الموارد عند إغلاق الـ Controller
    super.onClose();
  }
}