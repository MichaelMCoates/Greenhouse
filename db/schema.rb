# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170423213752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.integer  "user_id",        null: false
    t.integer  "goal_amt",       null: false
    t.integer  "current_amt",    null: false
    t.string   "title",          null: false
    t.text     "tagline",        null: false
    t.string   "city",           null: false
    t.string   "country",        null: false
    t.integer  "duration",       null: false
    t.text     "overview",       null: false
    t.text     "campaign_story", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "campaigns", ["user_id"], name: "index_campaigns_on_user_id", using: :btree

  create_table "contributions", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "campaign_id", null: false
    t.integer  "perk_id"
    t.integer  "amount",      null: false
    t.string   "appearance",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "contributions", ["campaign_id"], name: "index_contributions_on_campaign_id", using: :btree
  add_index "contributions", ["perk_id"], name: "index_contributions_on_perk_id", using: :btree
  add_index "contributions", ["user_id"], name: "index_contributions_on_user_id", using: :btree

  create_table "perks", force: :cascade do |t|
    t.integer  "campaign_id",                  null: false
    t.integer  "price",                        null: false
    t.string   "title",                        null: false
    t.text     "description",                  null: false
    t.integer  "number_available",             null: false
    t.date     "delivery_date",                null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "number_claimed",   default: 0
  end

  add_index "perks", ["campaign_id"], name: "index_perks_on_campaign_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                   null: false
    t.string   "password_digest",         null: false
    t.string   "session_token",           null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "first_name",              null: false
    t.string   "last_name",               null: false
    t.string   "avatar_img_file_name"
    t.string   "avatar_img_content_type"
    t.integer  "avatar_img_file_size"
    t.datetime "avatar_img_updated_at"
    t.string   "city"
    t.string   "country"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
