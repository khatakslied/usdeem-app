require 'rails_helper'

RSpec.describe Team, type: :model do

  it 'checks if the initialize method accepts name on creation' do
    test_company = Company.new(name: 'Test Company')
    test_team = Team.new(name: 'Test team', company_id: test_company.id)
    expect(test_team.name).to eq('Test team')
  end

  it 'checks if a team\'s name can be changed' do
    test_company = Company.new(name: 'Test Company')
    test_team = Team.new(name: 'Test team', company_id: test_company.id)
    test_team.name = 'New Test team'
    expect(test_team.name).to eq('New Test team')
  end

  context 'checks if it belongs to company' do
    it { should belong_to(:company) }
  end

  context 'checks if it has many users' do
    it { should have_many(:users) }
  end

  context 'presence of name validation'do
    it { should validate_presence_of(:name) }
  end

end
