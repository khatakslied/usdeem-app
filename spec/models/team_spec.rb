require 'rails_helper'

RSpec.describe Team, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it 'belongs_to :company'

  it 'has_many :users, dependent: :destroy'

  it 'validates :name, presence: true'

  it 'has a name'

  it 'has a company id? (same as first?)'
end
