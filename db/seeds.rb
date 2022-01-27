# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning up database..."
# once company is destroyed, the teams, users, and reviews will be destroyed accordingly
Company.destroy_all
puts "Database has been reset"

company = Company.create!(name: "RubyIsAwesome")
puts "Company #{company.name} was created"

team = Team.new(name: "Team A")
team.company = company
team.save!
puts "Team #{team.name} was created"

user1 = User.create!(
  first_name: "Vivian",
  last_name: 'Bow',
  email: 'vivian@lewagon.jp',
  password: '123456',
  team: team
)
puts "User #{user1.first_name} was created"

user2 = User.create!(
  first_name: "Ryan",
  last_name: 'Johnson',
  email: 'ryan@lewagon.jp',
  password: '123456',
  team: team
)
puts "User #{user2.first_name} was created"

user3 = User.create!(
  first_name: "Matias",
  last_name: 'Acuna',
  email: 'matias@lewagon.jp',
  password: '123456',
  team: team
)
puts "User #{user3.first_name} was created"

user4 = User.create!(
  first_name: "Konstantin",
  last_name: 'Yatsenko',
  email: 'konstantin@lewagon.jp',
  password: '123456',
  team: team
)
puts "User #{user4.first_name} was created"
