# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Services::Application.config.secret_key_base = '72c44e4960ddba7eb4a491846548ed5dd61acbcef5392e1b969ad889d06e75c1632a3a426a835fc36ca8ef8397225dfc20231a7979e2fae940e974c0df5cfebd'
