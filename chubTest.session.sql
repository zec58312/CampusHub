create TABLE comments(
    id serial primary key,
    content text NOT NULL,
    dateTimePosted timestamp default current_timestamp,
    forumID int references forum_posts(id),
    author int references users(id)
);