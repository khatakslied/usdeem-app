class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  belongs_to :team
  # commented out until reviews were created in seed
  # has_many :reports, dependent: :destroy
  # WE SHOULD ONLY DELETE REPORTS WHERE RECIPIENT_ID = USER
end
