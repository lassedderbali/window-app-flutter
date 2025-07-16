class UserModel {
  final String id;
  final String name;
  final String email;
  final bool isDarkMode;

  UserModel({
    required this.id,
    required this.name,
    required this.email,
    this.isDarkMode = false,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      email: json['email'] ?? '',
      isDarkMode: json['isDarkMode'] ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'isDarkMode': isDarkMode,
    };
  }

  UserModel copyWith({
    String? id,
    String? name,
    String? email,
    bool? isDarkMode,
  }) {
    return UserModel(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      isDarkMode: isDarkMode ?? this.isDarkMode,
    );
  }
}