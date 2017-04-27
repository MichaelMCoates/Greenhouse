# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Campaign.destroy_all
Perk.destroy_all
Contribution.destroy_all

users = []
campaigns = []
perks = []

hexagon_user = User.create({
  email: "HEXAGON@gmail.com",
  password: "HEXAGON",
  first_name: "HEXAGON",
  last_name: "by Smart Bikes",
  city: "Los Angeles",
  country: "United States",
  postal_code: 90210,
  tagline: "HEXAGON",
  about_me: "by Smart Bikes",
  avatar_img: "https://s3.amazonaws.com/the-greenhouse-dev/hexagon/hexagon-logo.jpg",
  prof_img: "https://s3.amazonaws.com/the-greenhouse-dev/hexagon/hexagon-prof-img.jpg",
})

users.push(hexagon_user)

bill_nye = User.create({
  email: "BillNye@gmail.com",
  password: "thescienceguy",
  first_name: "Bill",
  last_name: "Nye",
  city: "Hollywood",
  country: "United States",
  postal_code: 90111,
  tagline: "Yeah this is a bill nye tagline",
  about_me: "Yeah this is some about me stuff about bill nye yeah",
})

users.push(bill_nye)

hexagon = Campaign.create({
  user_id: hexagon_user.id,
  goal_amt: 30000,
  current_amt: 54090,
  title: "HEXAGON - Camera, Signals, & Sensors for Cyclists",
  tagline: "With a full HD camera, power bank, crash sensor, & more HEXAGON is the ultimate safety device.",
  city: "Hollywood",
  country: "United States",
  duration: 60,
  overview: "With a revolutionary Full HD (1080p/720p)  rear-view camera, smart sensors, and a complementary app, HEXAGON is the ultimate safety device for cyclists. Our streaming camera, power bank, activity tracker, odometer, and other smart safety features will be sure to make your ride safe and connected. Let HEXAGON change the way you ride.",
  campaign_story: "HEXAGON makes any bike a safer and smarter by seamlessly connecting with your smartphone. View the traffic behind you, live stream your ride, & signal to cars all through smartphone integration. With our rear-facing camera, you can view traffic & stream your ride.HEXAGON has Automatic Stop, Turn, and Motion signals.iOS & Android app with activity tracker, navigation system, and more.Award-winning cyclist, Vittorio Brumotti, loves HEXAGON. Check out the video below to hear Vittorio's stamp of approval!HEXAGON is equipped with a rear-facing HD camera, Automatic Stop, Turn, and Motion signals. To navigate the turn signals, HEXAGON comes with a wireless remote that securely attaches to your handle bars. HEXAGON's social and recording features can be managed through the HEXAGON app.HEXAGON comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. HEXAGON Light has all the great features of HEXAGON, minus the turn signals and the Wireless Remote Control. This slimmed down model has the same rear-facing HD camera, Automatic Stop, and Motion signals. All of HEXAGON Light's features and settings can be managed through the HEXAGON app, so there's no need for the remote!  HEXAGON Light comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. ",
  tile_img: "https://s3.amazonaws.com/the-greenhouse-dev/hexagon/dyxkxehtill4pk3zdqqt.jpg",
  overview_img: "https://s3.amazonaws.com/the-greenhouse-dev/hexagon/hexagon-rear-view-camera.jpg",
  pitch_img: "https://s3.amazonaws.com/the-greenhouse-dev/hexagon/hexagon-smart-bike-cam.jpg",
})

campaigns.push(hexagon)


hex_perk = Perk.create({
  campaign_id: hexagon.id,
  price: 99,
  title: "Get (1) HEXAGON",
  description:"EARLY BIRD PRICE: 50% OFF RETAIL! Get (1) HEXAGON, Color: Black body & Blue frame. (1) HD Rear Camera and Extended Lights module, (1) Wireless Remote Control, (2) Installed 18650 Batteries, (1) Mount to Frame, and (1) Charging Cable (micro-USB/USB). Free U.S. and Canada Shipping!",
  number_available: 100,
  number_claimed: 82,
  delivery_date: Date.new(2017, 9),
})

perks.push(hex_perk)

hex_cont_1 = Contribution.create({
  user_id: bill_nye.id,
  campaign_id: tv_show.id,
  perk_id: perk.id,
  amount: 99,
  appearance: (bill_nye.first_name + bill_nye.last_name),
})

hex_cont_2 = Contribution.create({
  user_id: hexagon_user.id,
  campaign_id: tv_show.id,
  perk_id: perk.id,
  amount: 99,
  appearance: (hexagon_user.first_name + hexagon_user.last_name),
})

contributions.push(hex_cont_1)
contributions.push(hex_cont_2)
