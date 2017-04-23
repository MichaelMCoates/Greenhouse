# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Campaign.destroy_all

bill_nye = User.create({
  email: "BillNye@gmail.com",
  password: "thescienceguy",
  first_name: "Bill",
  last_name: "Nye",
  city: "Hollywood",
  country: "United States",
})


tv_show = Campaign.create({
  user_id: bill_nye.id,
  goal_amt: 10000,
  current_amt: 7486,
  title: "Bill Nye The Science Guy",
  tagline: "It's my show!",
  city: "Hollywood",
  country: "United States",
  duration: 60,
  overview: "This is some overview text",
  campaign_story: "This is a huge campaign story",
})

cont = Contribution.create({
  user_id: bill_nye.id,
  campaign_id: tv_show.id,
  amount: 55,
  appearance: (bill_nye.first_name + bill_nye.last_name),
})
