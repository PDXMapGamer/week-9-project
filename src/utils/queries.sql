--! CREATE TABLE IF NOT EXIST:
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  clerk_id TEXT UNIQUE,
  username VARCHAR(64) UNIQUE,
  bio TEXT
);

CREATE TABLE IF NOT EXISTS posts(
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(clerk_id),
  post TEXT
);

CREATE TABLE IF NOT EXISTS likes(
  user_id TEXT REFERENCES users(clerk_id),
  post_id INT REFERENCES posts(id),
  PRIMARY KEY(user_id, post_id)
);

CREATE TABLE IF NOT EXISTS followers_junction(
  follower_id TEXT REFERENCES users(clerk_id),
  followed_user_id TEXT REFERENCES users(clerk_id)
);