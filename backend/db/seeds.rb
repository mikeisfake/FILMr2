# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create([
  {title: "tenet", year: "2020", director: "Christopher Nolan", summary: "timey-wimey"},
  {title: "the lobster", year: "2015", director: "Yorgos Lanthimos", summary: "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods"},
  {title: "Her", year: "2013", director: "Spike Jonze", summary: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need."},
  {title: "Arrival", year: "2016", director: "Denis Villeneuve", summary: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecrafts appear around the world."},
  {title: "Ex Machina", year: "2014", director: "Alex Garland", summary: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I."},
  {title: "Upgrade", year: "2018", director: "Leigh Whannell", summary: "Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant."},
  ])
