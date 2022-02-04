require 'rails_helper'

RSpec.describe SkillGroup, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it 'checks if the initialize method accepts score on creation' do
    test_skill_group = SkillGroup.new(score: 3)
    expect(test_skill_group.score).to eq(3)
  end

  it 'checks if the initialize method accepts category on creation' do
    test_skill_group = SkillGroup.new(category: 'Collaborative Skills')
    expect(test_skill_group.category).to eq('Collaborative Skills')
  end

  context 'checks presence of score validation' do
    it { should validate_presence_of(:score) }
  end

  context 'checks value of score is between 1 and 5' do
    it { should validate_inclusion_of(:score).in_range(1..5) }
  end

  context 'checks presence of category validation' do
    it { should validate_presence_of(:category) }
  end

  context 'checks if it belongs to key_trait' do
    it { should belong_to(:key_trait) }
  end

  context 'checks if it has many :skills' do
    it { should have_many(:skills) }
  end

end
