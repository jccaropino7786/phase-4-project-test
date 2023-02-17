class Project < ApplicationRecord
  belongs_to :user
  has_many :project_materials, dependent: :destroy
  has_many :materials, through: :project_materials

  validates :summary, length: { maximum: 50 }
  validates :status, inclusion: { :in => ['pending', 'completed', 'rejected']}
end
