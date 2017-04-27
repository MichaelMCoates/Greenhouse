# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: Chicago }, { name: Copenhagen }])
#   Mayor.create(name: Emanuel, city: cities.first)

User.destroy_all
Campaign.destroy_all
Perk.destroy_all
Contribution.destroy_all

users = []
campaigns = []
perks = []
contributions = []

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
  avatar_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/hexagon/hexagon-logo.jpg",
  prof_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/hexagon/hexagon-prof-img.jpg",
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
  campaign_story: "HEXAGON makes any bike a safer and smarter by seamlessly connecting with your smartphone. View the traffic behind you, live stream your ride, & signal to cars all through smartphone integration. With our rear-facing camera, you can view traffic & stream your ride.HEXAGON has Automatic Stop, Turn, and Motion signals.iOS & Android app with activity tracker, navigation system, and more.Award-winning cyclist, Vittorio Brumotti, loves HEXAGON. Check out the video below to hear Vittorios stamp of approval!HEXAGON is equipped with a rear-facing HD camera, Automatic Stop, Turn, and Motion signals. To navigate the turn signals, HEXAGON comes with a wireless remote that securely attaches to your handle bars. HEXAGONs social and recording features can be managed through the HEXAGON app.HEXAGON comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. HEXAGON Light has all the great features of HEXAGON, minus the turn signals and the Wireless Remote Control. This slimmed down model has the same rear-facing HD camera, Automatic Stop, and Motion signals. All of HEXAGON Lights features and settings can be managed through the HEXAGON app, so there's no need for the remote!  HEXAGON Light comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. ",
  tile_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/hexagon/dyxkxehtill4pk3zdqqt.jpg",
  overview_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/hexagon/hexagon-rear-view-camera.jpg",
  pitch_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/hexagon/hexagon-pitch-img.jpg",
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
  campaign_id: hexagon.id,
  perk_id: hex_perk.id,
  amount: 99,
  appearance: (bill_nye.first_name + bill_nye.last_name),
})

hex_cont_2 = Contribution.create({
  user_id: hexagon_user.id,
  campaign_id: hexagon.id,
  perk_id: hex_perk.id,
  amount: 99,
  appearance: (hexagon_user.first_name + hexagon_user.last_name),
})

contributions.push(hex_cont_1)
contributions.push(hex_cont_2)


sobro_user = User.create({
  email: "StoreBound@gmail.com",
  password: "StoreBound",
  first_name: "Store",
  last_name: "Bound",
  city: "New York",
  country: "United States",
  postal_code: 11101,
  tagline: "We are StoreBound, a product innovation company.",
  about_me: "StoreBound is a product innovation company. Our design team works with inventors, licensing partners, and manufacturers to create, produce, and distribute innovative products to retailers around the globe. We are creative & enthusiastic - we embrace the unique which brings a diverse set of experiences and expertise. Our management team hails from the most well-respected retailers, wholesalers and marketing firms, and the team has launched thousands of products across numerous industries.",
  avatar_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/sobro/storebound-avatar-img.jpg",
  prof_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/sobro/storebound-prof-img.jpg",
})

users.push(sobro_user)


sobro = Campaign.create({
  user_id: sobro_user.id,
  goal_amt: 50000,
  current_amt: 1032354,
  title: "Sobro - A Cooler Coffee Table",
  tagline: "With a full HD camera, power bank, crash sensor, & more HEXAGON is the ultimate safety device.",
  city: "Hollywood",
  country: "United States",
  duration: 60,
  overview: "The Sobro is a smart coffee table designed to support your connected lifestyle. With a refrigerated drawer, Bluetooth speakers, charging ports, and LED lights, the Sobro keeps you powered up. It could be the greatest living room innovation since the remote control.",
  campaign_story: "
  Designed for a digital lifestyle, Sobro is the furniture of the future. We've elevated the coffee table from a piece of wood that props up unopened large-format books, to an all-in-one center that connects your powered up life.


  You will be refunded in full soon after the campaign has ended.

  Does the Sobro come with a warranty?
  Yes, we are just finalizing the details.

  What happens if the project gets pushed back past the delivery date?
  With crowdfunding we are expected to deliver a product that can otherwise take years to deliver. While we will do our best to deliver on the estimated time frame, we also want to make sure we produce a quality product that you are extremely satisfied with. There may be certain set backs beyond our control which may delay the project. However, we will always be transparent and keep you all up to date.

  Can I get a refund after the campaign has ended?
  The money raised here on Indiegogo will go into product development, purchasing of materials, and manufacturing to deliver the Sobro to your home. Refunds will only be issued if we can not deliver the final product after exploring all possible options. We will do our best to be transparent and keep you updated on all developments.

  Can you ship outside of the US and Canada?
  We see Sobro in homes around the globe. But each country has different standards for electrics and refrigeration that we must follow. For our initial campaign, we’re limited to the US and Canada, but if we get enough interest from other countries, we can add an international perk. Stay tuned for more.

  Will the Sobro vary from the design above?
  While we have the preliminary design and prototypes build, we may still make some minor improvements. We love hearing from our supporters and if you have any suggestions we will be more than happy to consider it.

  How can I choose my color?
  Everyone will have the option to select what color they would like after we reach our stretch goal of 1 million. This will be done in the form of a survey after the campaign has ended.

  Does the Sobro come assembled?
  Yes, you only need to screw the legs into the bottom of the table and you are good to go.

  How long is the power cable?
  Approximately 10ft (3 meters).

  Where is the power cable located?
  The power cable is located underneath the table.

  What is the temperature range of the fridge drawer?
  The temperature range of the fridge we are aiming for is 33.8F - 53.6F

  What version of bluetooth is being used?
  Currently version 4 is used to make it easier to pair with different devices from different manufacturers. However, we are still looking at other versions for audio quality and reliability.

  What are the speaker specifications?
  Current specifications are - Sensitivity (2.83 V/1m) 90dB, Power Handling 15W RMS 10%, Impedence Nominal 8 Ohm.

  Is there an indication so I know when a device is synced?
  Yes, it will be shown on the display.

  What is the bluetooth range?
  Approximately 33 feet. This depends on the environment and type of device being used.

  After a device has been synced and it falls out of range, does it auto reconnect when back in range?
  Yes.

  What type of items can I plug into the outlets on the Sobro?
  You can plug any standard outlet type devices with a power rating of less than 200W total (or 100W per outlet). Ideal for laptop chargers, battery chargers, and some projectors.

  What happens if I plug in an item that overloads the outlets?
  We are looking at incorporating an overload safety switch.

  Number of color LED options for the ambience?
  7 single color and 1 fade through all colors.

  Can you charge devices using all USB ports at once?
  Yes.

  What happens if I spill liquid on the display and buttons?
  Just wipe it up, the controls are underneath the tempered glass.",
  tile_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/sobro/sobro-tile-img.jpg",
  overview_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/sobro/sobro-overview-img.jpg",
  pitch_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/sobro/sobro-pitch-img.jpg",
})

campaigns.push(sobro)


sobro_perk = Perk.create({
  campaign_id: sobro.id,
  price: 649,
  title: "Sobro Pre Regular Extra",
  description:"56% off MSRP. Get one Sobro Coffee Table. Designed with refrigerator, Bluetooth speakers, LED lights, charging ports, touch control and more. Get the Sobro at $850 off the retail price!",
  number_available: 200,
  number_claimed: 173,
  delivery_date: Date.new(2017, 9),
})

perks.push(sobro_perk)

hex_cont_3 = Contribution.create({
  user_id: hexagon_user.id,
  campaign_id: sobro.id,
  perk_id: sobro_perk.id,
  amount: 649,
  appearance: (hexagon_user.first_name + hexagon_user.last_name),
})

contributions.push(hex_cont_3)










juisir_user = User.create({
  email: "JUISIR@gmail.com",
  password: "JUISIR",
  first_name: "Leo",
  last_name: "Chen",
  city: "Singapore",
  country: "Singapore",
  postal_code: 58496,
  tagline: "",
  about_me: "",
  avatar_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/juisir/juisir-avatar-img.jpg",
  prof_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/juisir/juisir-prof-img.jpg",
})

users.push(juisir_user)


juisir = Campaign.create({
  user_id: juisir_user.id,
  goal_amt: 62345,
  current_amt: 722586,
  title: "JUISIR - Zero cleaning, Maximum juice",
  tagline: "JUISIR is an innovative cold press juicer requiring no cleaning.",
  city: "Singapore",
  country: "Singapore",
  duration: 60,
  overview: "JUISIR is an innovative cold press juicer requiring no cleaning. 8 tons of force will squeeze every drop of your chosen juice recipe.",
  campaign_story: "
  How many new diets have you started but never stuck to? How many times have you declared you will eat healthier but still find yourself snacking on those cookies late at night? Truth is, most of us struggle to follow through on what we know is good for us. So, we asked ourselves, ‘Why are healthy habits so hard to form?’

We’ve studied the science of habits. It turns out, you don’t need to work on a hundred different things to be healthy. You just need to start with one habit, a keystone habit! Drinking  fresh juice is the easiest form of healthy living.

The problem with juicing is that it’s way too much work!!! Drinking is easy, but the cleaning that comes after is a nightmare!! This is why we created JUISIR, the innovative juicing machine that does not require any cleaning.

In order to make JUISIR cheaper to the mass market and make healthy living accessible to everyone, please back us!!! Join the juicer revolution and be one of JUISIR’s first users.







Check out what the media are saying on social media!







The Machine
JUISIR is an innovative cold press juicer that extracts juice from fresh fruit and vegetables through a press with about eight-tons of force (approximately equal to the size of two adult elephants) in only 90 seconds. It’s powerful, fast, and effortless—with no cleaning required.





The Juicing bag
JUISIR offers two types of juicing bags - single use or multiple use,which are made from either biodegradable or recyclable materials. You can simply recycle or reuse the juicing bag - it's entirely up to you. DIY your juice packs and vary your juice recipes to different preferences and health needs.

Chop fruit and vegetables into pieces roughly the size of a dollar coin for maximum yield. Put about 300g-350g (0.7lb-0.8lb) raw products per bag, you can get approximate 200-250ml (6.8oz-8.5oz) juice.


The Juice
JUISIR exerts about 8 tonnes of force so that the fruit is squashed to a paper-like thinness and virtually every drop of nutritious juice is captured in the glass.






The Machine

How does JUISIR produce approximately 8 tonnes of force?

Our engineers have ingeniously utilized the patent-pending leverage principle to create torsion and hence produce a juicer that can exert up to 8 tonnes of force.





Why does JUISIR require no cleaning?

JUISIR works with our uniquely designed juicing bags which completely separate fruit and vegetables from the machine, meaning JUISIR itself never needs to be cleaned.

The Juicing Bag


 How do I buy the juicing bags after the Indiegogo campaign?

You will be able to find JUISIR on Amazon soon and we offer worldwide shipping at low cost. The cost-per-use can keep as low as 0.2 USD. In order to reduce the delivery cost and make juicing bags cheaper, we are looking for qualified local manufacturers of our juicing bags from all over the world.


The Machine
What are cold press juicers?

Unlike traditional juicers such as centrifugal juicers, cold press juicers press fruit and vegetables using large amounts of force to produce a higher juice yield than traditional juices. The cold-pressing technique allows juice drinkers to enjoy maximum nutrition (especially maintain more than 50% enzymes in the cold-pressed juice) from fruits and vegetables as there is no heat produced during the juicing process.

Comparing JUISIR with other types of juicers



Further Comparing JUISIR with other cold press juicers

The Juice
Why juice?

Pure fresh fruit and vegetable juice contains vital vitamins, minerals and nutrients. It is the easiest and most effective way to supplement nutrients and boost your energy.

Why Cold-Pressed juice?

There are minimal air contact and heat produced during the cold press juice process which helps reduce the oxidation and decomposition of nutrients. This, therefore, allows juice drinkers to enjoy maximum nutrition (especially maintain more than 50% enzymes in the cold-pressed juice) from fruit and vegetables. Cold-pressed juice also delivers a better taste and texture as there is no pulpy residues or bubbles left.

Mystery of fiber

Fiber comes in two varieties, both are beneficial to health:

Soluble fiber, which dissolves in water, can help lower glucose levels as well as help lower blood cholesterol.

Insoluble fiber, which does not dissolve in water, can help food move through your digestive system, promoting regularity and helping prevent constipation. There are sufficient soluble fibers in the fresh juice. If you are seeking to supplement nutrition for optimum health and boost your energy, drinking juice is the easiest and best solution.

Balanced Diet

Include more vegetables and low sugar fruits in your juice recipes for optimal health. Also, pay attention to the daily intake. Choose MyPlate - the official dietary guideline in the USA, recommends an adult male has maximum 16 ounces (about 450ml) fresh juice every day.

Recommended Juice Recipe


Sustainability
Save Water

Do you know how many liters of water is used each time you clean a juicer? It accounts for around 200 liters (52.83 US gallons) of water for a 20-minute cleaning! Here at JUISIR, as the machine requires no cleaning after each use, you are not only saving yourself time and effort but you’re also helping to save water and look after the environment.

Eco-friendly materials

The inner bags of both single-use and multiple-use juicing bags are made from 100% natural cotton, which are biodegradable and renewable. Cotton, especially 100% cotton can biodegrade within as little as a week to average 5 months. The outside sections of the bags are recyclable too. We are finding professional bodies for recovery of the outer bags worldwide.

Patents

As the first tabletop cold press juicer that requires no cleaning and provides juicing bags that allows you to DIY juice packs, JUISIR has several patent pending.






 Video 1: Juisir with Pomegranate
Weight: 300g Juice: 236g Juice yield: 79%



Video 2. Juisir vs Omega with Pomegranate


Video 3. Juisir vs Omega with Pomegranate 2



Please wait, we have more videos coming soon...





When this campaign is finished, we will send out a Reward Survey by email to ask for your mailing address and the JUISIR color you love. Based on the voting result, all backers might receive a big surprise in the future. Once you receive the email from us, you will have a few days to order and adjust the type. For those who have already pledged juicing bags sets, we have made notes for you and will double check with you through Reward Survey, so no worry for that.



Stretch Goals




We brought JUISIR to attend CES 2017 in Las Vegas and successfully released JUISIR to the public.


Let's see what the global buyers are saying in CES 2017










Our team comes from Singapore, Hong Kong and Mainland China. Our company was founded in 2012 and based in Shanghai, and has already successfully launched our first healthy drink product in the Chinese market and secured investment from well-known VC firms. Using our wealth of experience, excellent reputation and passion for delivering health drinks in the pursuit of healthy living, JUISIR was born and now we are ready to bring JUISIR to the world.







International shipping is included in the price, so you do not need to pay extra fees for shipping and delivery.

JUISIR developed strategic partnership with OPTIMUM and FROOTHIE.

Optimum, the leading brand of juicing machines globally. With JUISIR, Optimum will take its obsession for cold press juicing and health products to a completely new level.

Froothie International, Optimum’s global partner and a leading brand in the sale of health and wellness products will be distributing and servicing two years warranty for JUISIR customers in Europe (excluding Russia), UK, Australia, New Zealand, United States and Latin America.

We are looking for partners in the rest of regions and promise to provide at least one year warranty. We are devoting to extend our warranty in the near future.


We are aiming to build a global network of distributors, fresh fruit and vegetable suppliers, manufacturers of juicing bags, professional bodies for recycling of plastics and silicon products and technical support teams to provide better service and make JUISIR accessible to everyone.

If you are interested in JUISIR and would like to become our partner, Please email us (contact@juisir.com) for further information.


 How to DIY my juice pack by using the juicing bag?
It is super easy. Choose either single-use or multiple-use juicing bags, simply chop fruits and vegetables according to your recipe, and put them into the juicing bag, if you want to make juice immediately, then directly place the juicing bag into the machine, but if you want to use it later, then use food sealed clips to seal the juicing bag and store it in the fridge.

Can I use other plastics bags to replace the juicing bags?
As JUISIR will produce a force of about 8 tonnes, our juicing bag is specially designed to withstand such large pressure. Other plastics bags that you can find in stores would burst if you use them with JUISIR.

How to use the multiple-use juicing bags?
The multiple-use bags are split into two individual parts - the silicone outer bag and the 100% cotton filter. Place the cotton filter into the silicone outer bag and then follow the usual procedures. After juicing, take out the used cotton filter and discard it. The outer bag? Simply rinse it and you’re good to go again. All in all, there is no cleaning required for the machine.

How many times can the silicone outer bags be used before it needs replacing?
A few hundred times under normal use.

Can I buy silicone outer bags and cotton filters separately? How much do they cost respectively?
Of course you can, both silicone outer bags and cotton filters would be available on Amazon soon. The recommended retail price for silicone outer bags is around 29 USD each and cotton filters will cost as much as 0.2 USD each.

As insoluble fiber is also important, how to utilize the pulpy residues?
Fruit and vegetables residues are pressed to a paper-thinness. You can directly add them into your baking (work perfectly with biscuits) and help to increase your daily insoluble fiber intake. OR reuse them as organic fertilizer.

When can I receive JUISIR after I placed the order?
For those who are super early birds or early birds, the original silver JUISIR will be delivered to you in May and June 2017 respectively. Once our stretch goals are reached, new colors will be introduced. If you want to have JUISIR in new colors, all backers need to wait until July 2017, while all JUISIR would be ready and sent out during that time. You will receive email from us to confirm the color of JUISIR.


If you are interested in JUISIR and want to report and introduce JUISIR to others, feel free to download JUISIR’s media pack from GOOGLE DRIVE. The media pack including the introduction of JUISIR, logos, pictures and videos. If you want more, please contact us at any time: media@juisir.com Here is the link: https://drive.google.com/open?id=0BwnVwggkke34Zk5JdzNTZ0t1Mzg



Potential Delays
As with any physical product, there are challenges involved in getting it perfect and there is always the possibility of delays (sometimes outside of anyone's control). As part of JUISIRS efforts to avoid delays and ensure products are perfect for our supporters and customers, we work closely with our technical team, carefully select our partners and conservatively set time frames. Quality control remains a major focus for us. With our partners, we are implementing systems to ensure no product issues and perfect our machine before JUISIR makes its way into your hands.",
  tile_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/juisir/juisir-tile-img.jpg",
  overview_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/juisir/juisir-overview-img.jpg",
  pitch_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/juisir/juisir-pitch-img.jpg",
})

campaigns.push(juisir)


juisir_perk = Perk.create({
  campaign_id: juisir.id,
  price: 499,
  title: "Early bird",
  description: "Get a JUISIR machine, save 300 USD off! Receive 30 single-use juicing bags and one pack of multiple-use bags (including one silicone outer bag and 30 cotton filters) for free. Don’t worry about the expensive international shipping costs, we have you covered. JUISIR will cover shipping costs as an extra thankyou! You will be one of the first to receive the amazing JUISIR and lead our juicer revolution.",
  number_available: 200,
  number_claimed: 173,
  delivery_date: Date.new(2017, 9),
})

perks.push(juisir_perk)

hex_cont_4 = Contribution.create({
  user_id: hexagon_user.id,
  campaign_id: juisir.id,
  perk_id: juisir_perk.id,
  amount: 499,
  appearance: (hexagon_user.first_name + hexagon_user.last_name),
})

contributions.push(hex_cont_4)





revolar_user = User.create({
  email: "revolar@gmail.com",
  password: "revolar",
  first_name: "Revolar",
  last_name: "x",
  city: "Denver",
  country: "United States",
  postal_code: 58496,
  tagline: "Revolar: Protect the ones you love",
  about_me: "Revolar was founded in 2013 by Jacqueline Ros and Andrea Perdomo to make sure that no one's passion or potential is extinguished by fear. We believe you deserve to feel safe no matter who you are, where you live, how you look, or who you love. That’s why we created Instinct. At the click of a button, it can let people who care about you know your real-time location and if you’re safe, scared, or in an emergency — so they can get you any help you need.",
  avatar_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/revolar/revolar-avatar-img.jpg",
  prof_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/revolar/revolar-prof-img.jpg",
})

users.push(revolar_user)


revolar = Campaign.create({
  user_id: revolar_user.id,
  goal_amt: 50000,
  current_amt: 127057,
  title: "Revolar: Smart Safety to Protect Loved Ones",
  tagline: "Send for help fast. Text with a click. Hit your step goal. Find your keys. Make your phone ring.",
  city: "Denver",
  country: "United States",
  duration: 60,
  overview: "You deserve to feel safe when you're going out for a walk, a run, or a night on the town. That’s why we created Instinct. At the click of a button, it can let your loved ones know your GPS location and if you’re safe, scared, or in an emergency. Plus, Instinct has Check-ins, Step Tracking, Ring Me, and more, so you’ll love using it and having it by your side, every day.",
  campaign_story: "
  Revolar Instinct is the fastest way to communicate or send for help. Just click the button 1, 2, or 3 times to alert loved ones with your location and different custom text messages.




Select up to 5 trusted contacts through the free Revolar app and choose which alerts they will each receive.





Instinct sends your real-time GPS location to chosen contacts at the click of a button. Enter your PIN code to stop sharing your location with contacts at any time.













In an unsafe situation, you may not have time to use your phone or be able to access it. And if things turn tense, attempting to call for help on your phone could make things worse by escalating the situation.

That’s why Revolar allows you to discreetly activate a silent alert in less than a second, and send for help fast while automatically sharing your location.





While designing our safety devices, we spent hundreds of hours talking with assault survivors who said time and again of their experiences, I knew something was wrong, but I didn’t know what to do. I couldn’t call 911 based on a bad feeling.”

We never want you to feel paralyzed, that’s why Revolar empowers you to easily ask for help from people you trust, before a bad feeling becomes a dangerous situation.




Through our research with survivors and law enforcement officials, we've found that in an emergency, there’s simply no time to take out your phone and dial — let alone answer a 911 operator’s questions. Pair that with the reality that most emergency call centers are designed to track landlines, not cell phones, and it’s clear that smartphones alone just don’t cut it for safety:

Last year, about 12.4 million, or 63%, of California's cellphone calls to 911 didn't share location. -USA Today
Location info sent to emergency operators is not always specific enough for rescue personnel to deliver assistance to the caller quickly.” -FCC
It is now easier than ever for victims to reach 911, but harder than ever for responders to reach them.” - David Shoar, Sheriff, St. John’s County, Florida
That's why Instinct lets you activate GPS alerts in less than a second, so people you trust can send help to your real-time location, even if you're on the move.


At our core, we believe everyone has the right to feel safe. Our mission is to make that a reality through technology so that no one’s passion or potential is extinguished by fear.












Connect
Use the Revolar App and Bluetooth to easily connect Instinct with your smartphone. Instinct won't interfere with your other Bluetooth devices.

Wear:
Clip Instinct to your clothes or keys to help you feel and stay safe on the go.

Click:
Live confidently knowing that you can send for help by simply clicking your favorite wearable.





Contacts don't need the Revolar App to receive alerts.

Alerts are sent through texts and emails that link to a map of the user's live location and provide custom instructions.





This free mobile app allows you to connect Instinct to your smartphone, update your Revolar contact list, customize your alert messages, and more.

Also, if you send an alert, but it turns out you don't need help, you can cancel the alert by entering your custom PIN code in the app. Then, your loved ones will be alerted with a message that you're okay.





iPhone 4s & Later, requires iOS 9.0+

Android 5.0 & LaterInstinct sends alerts by connecting to your synced smartphone via Bluetooth. Instinct works anywhere in the world your synced smartphone has cell service or WiFi.






Shipping Ready!



From packing final product to testing at Revolar HQ!
We are ready!







Revolar Instinct is already in production with all of the necessary certifications, and yours will be ready to ship in May. As an Indiegogo backer, you can get Instinct for yourself and loved ones at an exceptionally low price before it hits retail shelves this summer.

By supporting this campaign, you’ll help us continue to develop technology that directly impacts people all across the world. You'll also support research and development of new features for your own Revolar Instinct.




We designed Instinct to be more than just the fastest way to send for help.

Instinct helps you stay in touch with positive Check-in messages, move more with step tracking, ditch uncomfortable situations with Ring Me, and get support in non-emergencies with Yellow Alerts. It even chirps to help you find it if it’s misplaced.

So why design Instinct with all this power? Because if you love wearing Instinct every day, it will be there when you need it.

























What are the dimensions of Revolar Instinct?

Revolar Instinct is about the size of a quarter, so you can wear it anywhere.

Length - 34 mm (1.34 in)
Width -  27 mm (1.06 in)
Depth -  9 mm (0.35 in)
 
How water resistant is the Revolar Instinct?

Revolar Instinct has a rating of IP-68. This means it's protected from dust and it can be submerged in up to 2 meters of water for approximately 30 minutes.

Do I need to have my smartphone with me to use Revolar Instinct?

Yes, Revolar Instinct connects to your smartphone using Bluetooth® low energy, so you never have to pay an additional monthly fee for discreetly alerting friends and family. Revolar Instinct and your smartphone need to be within Bluetooth range (~30 ft to 50 ft) of each other during use.
 
Does Revolar Instinct drain the battery life of my smartphone?

Revolar Instinct is able to conserve energy by using Bluetooth low energy, which means Instinct uses much less battery life than other types of Bluetooth products.

Do I need to charge Revolar Instinct?

Nope! We understand the benefit of having one less device to charge. Revolar Instinct uses a coin cell CR2032 battery, which lasts 6+ months depending on use.

Are iPads or other tablets compatible with the Revolar Instinct?

Revolar Instinct can sync to some Wi-Fi + Cellular tablets, however many tablets aren't compatible at this time. Connect with our team at help@revolar.com before using a tablet with Instinct to make sure you have a qualifying device.

Can I use my Revolar wearable while traveling internationally?

Yes, travel on! As long as you have a data plan and are within a coverage area provided by your smartphone carrier. Bluetooth and data must be enabled while traveling. Review our operating parameters for additional details.

Is the Revolar app available in multiple languages?

The app is only available in English right now. Due to the large variety of countries on our list of contributors, we have not yet been able to complete translations of the app for all countries.

Are there any ongoing fees?

Nope! There is no monthly fee to send alerts or to check in with your loved ones. Standard messaging and data rates may apply.

How much is shipping?

You’ll see shipping fees associated with your contribution after selecting a perk and entering your country. For orders outside the U.S., any customs, duties, or taxes are the responsibility of the contributor. Please note that we are unable to mark orders as gifts to get around duties.

Can I support Revolar without selecting a perk?

Absolutely, you can do so here. We appreciate your support!

What is your refund policy?

Revolar wearables are eligible for return within 45 days of purchase (or within 45 days of shipment for pre-orders). Customized product (such as engraved devices) may not be returned. Revolar wearables come with a 1-year limited warranty. You can find the full details of our return and warranty policy here.

When will my order arrive?

Shipping starts in May! Orders to the U.S. are estimated to arrive within 3 to 8 business days once shipped. International shipping timeframes can take longer and will vary due to the amount of time to pass through customs. You’ll receive tracking, and you can check the status of your pre-order when logged into Indiegogo.

What if I have more questions?",
  tile_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/revolar/revolar-tile-img.jpg",
  overview_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/revolar/revolar-overview-img.jpg",
  pitch_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/revolar/revolar-pitch-img.jpg",
})

campaigns.push(revolar)


revolar_perk = Perk.create({
  campaign_id: revolar.id,
  price: 109,
  title: "Revolar Early Bird: 2-Pack",
  description: "Birds of a feather fly together. Look out for each other with 2 Revolars at a bundled price, saving over 32% off retail (MSRP: $160).",
  number_available: 175,
  number_claimed: 123,
  delivery_date: Date.new(2017, 9),
})

perks.push(revolar_perk)



hex_cont_5 = Contribution.create({
  user_id: hexagon_user.id,
  campaign_id: revolar.id,
  perk_id: revolar_perk.id,
  amount: 109,
  appearance: (hexagon_user.first_name + hexagon_user.last_name),
})

contributions.push(hex_cont_5)






river_user = User.create({
  email: "river@gmail.com",
  password: "riverrr",
  first_name: "EcoFlow",
  last_name: "Tech",
  city: "Shenzhen",
  country: "China",
  postal_code: 58496,
  tagline: "e",
  about_me: "Founded in 2016, EcoFlow Tech is a revolutionary battery company.",
  avatar_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/river/river-avatar-img.jpg",
  prof_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/river/river-prof-img.jpg",
})

users.push(river_user)


river = Campaign.create({
  user_id: river_user.id,
  goal_amt: 30000,
  current_amt: 422766,
  title: "RIVER: Your Mobile Power Station & Solar Generator",
  tagline: "Smartest Portable Power for All Devices. Holds Charge 1 Year. (2) AC, (4) USB Fast-Charge, & more.",
  city: "San Francisco",
  country: "United States",
  duration: 60,
  overview: "World's Most Comprehensive Array of Charging Ports Ever.   Revolutionary Design.   One Third the Weight & Double the Power of Anything on the Market!    Mega-Capacity 116,000mAh/412Wh Li-ion Battery & Total Output of 500 Watts.    Ultra-Lightweight (11 lbs).    (2) USB Quickcharge 2.0,  (2) USB,  (2) USB Type C,  (2) AC Outlets,  (2) DC Outlets, &  (1) 12V Car Port.",
  campaign_story: "
  What Makes RIVER Different?
RIVER is a new generation of smart, clean, mobile power.

Recharge with Car Jack, Solar Power, or Wall Socket. Mega Capacity, Lightweight, and Portable. Holds Charge 1 Year.







The Reviews Are In:

I did most of my River testing from the beach where I own a small house with limited access to power... You know what, I am happier... Im also a bit smarter now thanks to Rivers display which gives real-time insight into the power consumed by my gear.

It was a fun challenge to find enough devices to deplete Rivers battery. A fully charged River lasted four days under heavy use, charging phones, speakers, laptops, tablets, and cameras off the DC ports.

In order to deplete it more quickly,  eventually resorted to running devices off Rivers AC ports, including my home theater projector, and a DJI-supplied charger from a Mavic Pro

- Thomas Ricker, The Verge. READ FULL STORY



Take a Road Trip with RIVER:





















Simultaneously Charge Up To 11 Devices
500W Total AC/DC Output. Most Comprehensive Array of Output Ports. Ever.












Official Unboxing Video:
Brought to you by our friends at Enjoy!


With Every RIVER Pre-Order You Get:




Accessories:






Pre-Order Breakdown:


River Mobile Power Station (Black or White)
+ US, Canada versions ship with 110V AC Outlets
+ UK, Australia, EU versions ship with 220-230V 50Hz AC Output & Universal Plug
Element-Proof Protective Case (Water Resistant)
50W Solar Charger (Turns RIVER into Solar Generator)



Clicking these options may take some time to load!

















FREE Hand-Delivery to Backers in SF, LA, & NYC
Be the First to Experience RIVER and Get FREE Hand-Delivery with Setup from Enjoy!

Pre-order RIVER today
Backers with shipping addresses in San Francisco, Los Angeles, & New York City will receive an email from EcoFlow
Schedule your free hand-delivery from Enjoy
An Enjoy Expert will hand-deliver your RIVER, help you get set up, and show you some tips and tricks






Incredible Technology. Affordable Price.
Our mighty small device packs a big punch. Its striking, sleek design supplies tons of power wherever you go.





Outperforms Every Other Portable Power Station






Advanced Technical Specifications








General




Inputs




Outputs




Internal




In Production & On-Track to Deliver
MONEY-BACK GUARANTEE
Arrives in the month indicated on the perk you claim on Indiegogo.



Sizzle Reel: RIVER in the Factory
Who knew battery production could be so sexy? Skip to 0:30 to see RIVER.






Our Vision
We are dedicated to social responsibility, harnessing our powerful new technology to foster inclusion and to raise standards of living in areas of the world where power shortages stunt growth and development.

Whether you are at a campsite outside Denver or in a  village outside of Delhi, EcoFlow is bringing you the mobile power station you need to power a free life.

May the power be with you!



Shipping


Where We Ship
Were able to ship worldwide to the United States, Canada, European Union, Australia, and the United Kingdom. VAT and GST is included. If you live in Australia, the EU, or the UK, your RIVER will ship in August with Universal Plugs instead of the US-Standard plugs.

When We Start Shipping
The first units will leave our warehouses starting June 2017. We cant use air freight, so allow up to 30 days for shipping. US & Canada backers can expect to receive your RIVER starting in July 2017. UK, EU, and Australia backers can expect the International version of RIVER to arrive starting in September 2017.

Why Pre-Order Now
Youll be providing valuable feedback that will help shake up the decades-old generator industry. By pre-ordering today, youre helping make the world a better place and a little less reliant on messy gas generators.







Frequently Asked Questions
General
What is RIVER?	RIVER is a portable charging station, back-up generator, and emergency battery. It can be used both indoors and outdoors, and can be recharged via solar charger, car charger or wall charger. (The latter two are included in the purchase of RIVER)
Who created it?	Were EcoFlow Tech, and RIVER is our first product. RIVER was designed entirely in-house by our team.
What are the 11 different ports?	River is equipped with 4 USB ports (2 Quick-Charge 2.0), 2 USB Type-C, 2 DC 6mm outputs, 2 AC outputs, and 1 12V Car Port.
What colors do you offer?	White & Black.
Which option is best for me?	We recommend selecting the RIVER + Solar Charger Perk to get RIVER and the 50W Solar Charger, and then buying the Protective Case Add-On. This will get you everything you need!
What is the $299 Now, $300 Later Deal?
Available in the US only, you can reserve a RIVER for only $299. You will be notified by email to make the $300 payment before RIVER ships to you starting in July. Your credit card will not be automatically charged. This is a great option if you want a RIVER but need to save up for it first.
You still save $100!



Technical
What is the uniqueness of the technology?	The battery management system. Its a smart system, that allows RIVER to 1) automatically adjust the power output to the Wattage your device needs, 2) regulate temperature so devices dont shut down by starting a fan if too hot, and informing you if its too cold, and 3) connect individually to each of the 11 output ports so if one were to short circuit or max-out the other 10 would continue charging.
How do I charge my RIVER?	RIVER has one smart DC input port that can automatically adapt to any power source from 10V-22V without an extra adapter. This input is located on the back right-hand side of RIVER. RIVER can be charged via wall charger, car charger, or solar charger. It takes approximately 6 hours to recharge RIVER by AC wall charger, however in only 4 hours, RIVER will be 70% of the way there!
Can RIVER power my devices while its charging?	Yes, RIVER has state-of-the-art flow-through charging. It can output power while being charged.
How do I store RIVER?	For optimal battery health, store RIVER at room temperature in a dry environment out of direct elements. RIVER will hold its charge for over a year.
What is the battery life?	The battery has a shelf life of 1 year (about 3-4x anything else on the market) this means you can leave in your basement and charge it once a year and it will still keep positive charge.
How does it work?	RIVER is incredibly easy to use. There is an on/off switch in the front, below the screen. To turn RIVER on, press the button for 2 seconds until it beeps. In the back, there is another button to turn on AC power. This is because AC power is quite inefficient, so we regulate its use separately. Hold the button down for 3 seconds in order to turn the AC power on.
How much does it weigh?	11 pounds (5 kilograms)
How many devices can it charge at once?	11 devices
What does auto-sensing mean?	RIVER has an intelligent battery management system. When a device is plugged into RIVER, it will sense the device, automatically turn on, and output the exact wattage your device needs. If RIVER senses nothing is plugged in, it will first turn idle, then turn itself off.


Safety & Regulation
What is the recommended temperature range?	32-95° F / 0-32° C is optimal for storage. RIVER can operate at up to 140° F / 45° C
Is it waterproof?	While RIVER isnt waterproof, the Protective Case is water resistant up to IP63 standards (rain, dust, sand, etc.). Do not submerge your RIVER under water.
What certifications do you have?	RIVER has FCC, CE, UN38.3, and RoHS certifications. RIVERs chargers also have UL certifications.
How durable is it?	RIVER is very durable and rugged. However, we dont suggest tossing it around, since its a battery.


Shipping
When does shipping begin?	The first units will be shipped by June. US & Canada Backers can expect to receive units in July & August. UK, EU, and Australia by September.
Where does it ship?	We ship to US, Canada, UK, EU, and Australia. Shipping is free to the US+Canada & $50 elsewhere.
When is my countrys plug version ready?	RIVER will ship with the US-standard 110V AC plugs. Adapters will work just fine. Australia, the UK, and the EU have Universal Plug Outputs and will be available in September. Well be evaluating other countries on a case-by-case basis. Send us an email or comment!


Customer Service
What is the warranty?	For US purchases, EcoFlow warrants RIVER to be free of manufacturing defects. EcoFlow will pay for repair or replacement of parts and labor for 18 months from the date you receive RIVER. Specific terms are shipped with RIVER.
What is your pre-order refund policy?	Indiegogo refunds are processed during the campaign. If you change your mind or change addresses after the campaign, well do our best to accommodate. We wont able to refund Indiegogo orders once theyve shipped to you.
Whats your return policy?	Dont return your RIVER Mobile Power Station to the store. Youll be able to contact EcoFlow directly with any questions, problems, or concerns you might have. Specific terms are shipped with RIVER.",
  tile_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/river/river-tile-img.jpg",
  overview_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/river/river-overview-img.jpg",
  pitch_img: "https://s3.amazonaws.com/the-greenhouse-dev/main_seed_campaigns/river/river-pitch-img.jpg",
})

campaigns.push(river)


river_perk = Perk.create({
  campaign_id: river.id,
  price: 499,
  title: "RIVER GREENHOUSE Exclusive",
  description: "SAVE 30%! US & Canada Ships FREE in July with US Standard 110V AC Outlets. Australia, UK, and EU Ships in September with Universal Plug Outlets. Wall Charger, 12v Car Charger, DC Cable, DC Adapters. VAT & GST Included. Solar Charger Not Included.",
  number_available: 200,
  number_claimed: 23,
  delivery_date: Date.new(2017, 9),
})

perks.push(river_perk)


hex_cont_6 = Contribution.create({
  user_id: hexagon_user.id,
  campaign_id: river.id,
  perk_id: river_perk.id,
  amount: 499,
  appearance: (hexagon_user.first_name + hexagon_user.last_name),
})

contributions.push(hex_cont_6)








images = [
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/apple-desk-designer-display.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/food-kitchen-cooking-spices.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/light-night-lens-shadow.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/microphones-radio-sound-reportage-161865.png",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/night-street-skateboard-urban-17606.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo+(1).jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-132737.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-136204.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-164745.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-169652.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-169657.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-191160.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-207428.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-221151.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-230778.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-247321.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-25543.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-256298.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-28209.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-296285.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-30222.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-302655.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-343665.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-53903.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-85501.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-88735.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo-89723.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo.jpeg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/pexels-photo.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/sunglasses-apple-iphone-desk.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/technology-keyboard-desktop-book.jpg",
  "https://s3.amazonaws.com/the-greenhouse-dev/random_seeds/tent-camp-night-star-45241.jpeg"
]
