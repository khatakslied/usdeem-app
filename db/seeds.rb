# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning up database..."
# once company is destroyed, the teams, users, and reviews will be destroyed accordingly
Report.destroy_all
Company.destroy_all
puts "Database has been reset"

company = Company.create!(name: "Usdeem")
puts "Company #{company.name} was created"

team = Team.new(name: "Development Team")
team.company = company
team.save!
puts "Team #{team.name} was created"

user1 = User.create!(
  first_name: "Vivian",
  last_name: 'Bow',
  email: 'vivian@usdeem.jp',
  password: '123456',
  team: team
)
puts "User #{user1.first_name} was created"

user2 = User.create!(
  first_name: "Ryan",
  last_name: 'Johnson',
  email: 'ryan@usdeem.jp',
  password: '123456',
  team: team
)
puts "User #{user2.first_name} was created"

user3 = User.create!(
  first_name: "Matias",
  last_name: 'Acuna',
  email: 'matias@usdeem.jp',
  password: '123456',
  team: team
)
puts "User #{user3.first_name} was created"

user4 = User.create!(
  first_name: "Konstantin",
  last_name: 'Yatsenko',
  email: 'konstantin@usdeem.jp',
  password: '123456',
  team: team
)
puts "User #{user4.first_name} was created"

# Past Reports
require 'json'
serialized_data = File.read("public/data_hash.json")
report_data=JSON.parse(serialized_data)

# 6 months worth of past reports (recipient: everyone)
users = [user1, user2, user3, user4]
reports = []
users.each do |user|
  6.times do |n|
    report = Report.create!(
      created_at: Date.today - n.month,
      sender: users.sample,
      recipient: user
    )
    reports << report
  end
end

reports.each do |report|
  report_data.each do |key_trait, skill_groups|
    key_trait_name = KeyTrait.create!(
      category: key_trait,
      report: report
    )
    skill_groups.each do |skill_group, skills_and_question|
      skill_group_name = SkillGroup.create!(
        score: rand(1..5),
        category: skill_group,
        key_trait: key_trait_name
      )
      skills_and_question['skills'].each do |skill|
        Skill.create!(
          name: skill,
          improve: [true, false][rand(2)],
          skill_group: skill_group_name
        )
      end
    end
  end
end

puts "#{reports.length} reports were created"
