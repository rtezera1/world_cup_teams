# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
country_list  = [ ['Nigeria', 'Afirca'],
                  ['USA', 'North America' ],
                  ['Belguim', 'Europe'],
                  ['Italy', 'Europe'],
                  ['Colombia', 'Latin America']
]
country_list.each do |country, continent|
  Team.create(country: country, continent: continent)
end
