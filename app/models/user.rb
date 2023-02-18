class User < ApplicationRecord
    has_many :pending_projects, -> {where("status=?", "pending" )}, class_name: "Project", foreign_key: :user_id, dependent: :destroy
    has_many :completed_projects, -> {where("status=?", "completed" )}, class_name: "Project", foreign_key: :user_id, dependent: :destroy
    has_secure_password

    validates_presence_of :email
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }, on: :create

    enum role: [:client, :admin, :super_user]

    def admin_pending_projects
        if admin?
        Project.where("status=?", "pending")
        end
    end

end
