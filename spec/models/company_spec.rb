require 'rails_helper'

RSpec.describe Company, type: :model do

  it 'checks if the initialize method accepts :name on creation' do
    test_company = Company.new(name: 'Test Company')
    expect(test_company.name).to eq('Test Company')
  end

  it 'checks if a company\'s name can be changed' do
    test_company = Company.new(name: 'Test Company')
    test_company.name = 'New Test Company'
    expect(test_company.name).to eq('New Test Company')
  end

  context 'presence of name validation'do
    it { should validate_presence_of(:name) }
  end
  context 'checks if it has many teams' do
    it { should have_many(:teams) }
  end
end
