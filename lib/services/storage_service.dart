import 'package:get/get.dart';

class StorageService extends GetxService {
  // يمكن استخدام SharedPreferences أو أي نظام تخزين آخر
  final Map<String, dynamic> _storage = {};

  Future<StorageService> init() async {
    // تهيئة نظام التخزين
    return this;
  }

  void write(String key, dynamic value) {
    _storage[key] = value;
  }

  T? read<T>(String key) {
    return _storage[key] as T?;
  }

  void remove(String key) {
    _storage.remove(key);
  }

  void clear() {
    _storage.clear();
  }

  bool hasData(String key) {
    return _storage.containsKey(key);
  }
}