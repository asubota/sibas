# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def load_json(filename)
  JSON.parse IO.read(filename)
end

file = File.join Dir.pwd, 'db', 'data.wiki.ru.json'

load_json(file).each do |a|

  lat = if a['coordinates']
    a['coordinates'][0]
  else
    nil
  end

  lng = if a['coordinates']
    a['coordinates'][1]
  else
    nil
  end

  a = {
    name: a['name'],
    type: a['type'],
    prev_name: a['prev_name'],
    district: a['district'],
    name_ru: a['name_ru'],
    area: a['area'],
    active: a['active'],

    lat: lat,
    lng: lng
  }

  Address.create a
end
